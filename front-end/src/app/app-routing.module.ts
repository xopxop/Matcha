import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const accountModule = () => import('./account/account.module').then(m => m.AccountModule);
const routes: Routes = [
  { path: 'account', loadChildren: accountModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
