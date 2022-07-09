import { NgModule } from "@angular/core";
import { MatChaDatePickerComponent } from "./date-picker/date-picker.component";
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from "@angular/material/core";
import {
  MatMomentDateModule,
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [MatChaDatePickerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MatChaDatePickerComponent,
      },
    ]),
    MatNativeDateModule
  ],
  providers: [
    // { provide: DateAdapter, useClass: MomentDateAdapter },
    // {
    //   provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS
    // }
  ]
})
export class MatChaDatePicker {}