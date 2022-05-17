import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagesDialogData } from "../shared/images-dialog-data.model";

@Component({
  templateUrl: './image-preview-dialog.component.html',
  styleUrls: [
    './image-preview-dialog.component.scss'
  ]
})

export class ImagePreviewDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<ImagePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagesDialogData
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onGoNext(): void {
    if (this.data.activeIndex === this.data.images.length - 1) {
      return ;
    }
    this.data.activeIndex++;
  }

  onGoBack(): void {
    if (this.data.activeIndex === 0) {
      return ;
    }
    this.data.activeIndex--;
  }

  onGoFirstImage(): void {
    if (this.data.activeIndex === 0) {
      return ;
    }
    this.data.activeIndex = 0;
  }

  onGoLastImage(): void {
    if (this.data.activeIndex === this.data.images.length - 1) {
      return ;
    }
    this.data.activeIndex = this.data.images.length - 1;
  }
}