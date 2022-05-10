import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

const imagesInputModule = () =>
  import('../widget/images-input-widget/images-input.module').then((m) => m.ImagesInputModule);

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [{ path: 'image', loadChildren: imagesInputModule }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
