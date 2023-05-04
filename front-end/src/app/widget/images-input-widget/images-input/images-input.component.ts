import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewDialogComponent } from '../image-preview-dialog/image-preview-dialog.component';
import { ImageData } from '../shared/image-data.model';
import { ImagesDialogData } from '../shared/images-dialog-data.model';

@Component({
  selector: 'images-input',
  templateUrl: './images-input.component.html',
  styleUrls: ['./images-input.component.scss'],
})
export class ImagesInputComponent {
  @Input() readonly: boolean = false;
  @Output() imageAdded = new EventEmitter<ImageData>();
  @Output() imageRemoved = new EventEmitter<number>();

  images = new Array<ImageData>();

  constructor(private readonly dialog: MatDialog) {}

  addImage(event: Event): void {
    const fileList: FileList = (event.target as any).files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          const src = reader.result as string;
          const image = new ImageData(src, file!.name!);
          this.images.push(image);
          this.imageAdded.emit(image);
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    if (index) {
      this.images.splice(index, 1);
      this.imageRemoved.emit(index);
    }
  }

  previewImage(index: number): void {
    this.dialog.open(ImagePreviewDialogComponent, {
      data: {
        images: this.images,
        activeIndex: index,
      } as ImagesDialogData,
    });
  }
}
