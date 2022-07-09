import { Component, forwardRef } from "@angular/core";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import * as moment from 'moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  templateUrl: './date-picker.component.html',
  styleUrls: [
    './date-picker.component.scss'
  ],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
  ]
})
export class MatChaDatePickerComponent {
  placeholder = '';
  value = moment.utc('2022-06-22T23:59:00.000');

  public get dateValue() {
    return this.value.toDate();
  }

  public get isoString() {
    return this.value.toISOString();
  }

  showMe(): void {
    // console.log(this.value.toISOString());
    // console.log(this.value.format('YYYY-MM-DD'));
    // console.log(JSON.stringify(moment.utc('2022-06-29')));
    // console.log(moment('2022-06-29').toISOString());
    console.log(this.value);
  }

  changeTo(): void {
    this.value = moment('2022-06-29T21:00:00');
  }

  dateInput(event: any) {
    console.log("dateInput");
    console.log(event);
  }

  dateChange(event: any) {
    console.log("dateChange");
    console.log(event);
  }
}

const noop = () => {};