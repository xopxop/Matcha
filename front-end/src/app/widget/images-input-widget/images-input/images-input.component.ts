import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageData } from '../shared/image-data.model';

@Component({
  selector: 'images-input',
  templateUrl: './images-input.component.html',
  styleUrls: ['./images-input.component.scss'],
})
export class ImagesInputComponent {
  @Input() readonly: boolean = false;
  @Output() valueChange = new EventEmitter<Array<ImageData>>();

  images = new Array<ImageData>();

  constructor(
    private readonly dialog: MatDialog
  ) {}

  addImage(event: Event): void {
    const fileList: FileList = (event.target as any).files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          const src = reader.result;
          this.images.push(new ImageData(src as string, file!.name!));
          this.valueChange.emit();
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
      this.valueChange.emit();
    }
  }

  previewImage(index: number): void {
    this.dialog;
  }
}
