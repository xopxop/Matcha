import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

const datePickerModule = () =>
  import('./date-picker/date-picker.module').then((m) => m.MatChaDatePicker);

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [{ path: 'date-picker', loadChildren: datePickerModule }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
