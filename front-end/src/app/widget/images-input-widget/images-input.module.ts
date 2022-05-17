import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ImagePreviewDialogComponent } from './image-preview-dialog/image-preview-dialog.component';
import { ImagesInputComponent } from './images-input/images-input.component';

@NgModule({
  declarations: [ImagesInputComponent, ImagePreviewDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImagesInputComponent,
      },
    ]),
  ],
  exports: [ImagesInputComponent],
})
export class ImagesInputModule {}
