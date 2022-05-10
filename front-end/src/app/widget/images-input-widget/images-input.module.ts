import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ImagesInputComponent } from './images-input.component';

@NgModule({
  declarations: [ImagesInputComponent],
  imports: [
    CommonModule,
    MatIconModule,
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
