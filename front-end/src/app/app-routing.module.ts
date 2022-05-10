import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () =>
  import('./account/account.module').then((m) => m.AccountModule);
const profileModule = () =>
  import('./profile/profile.module').then((m) => m.ProfileModule);
const testModule = () =>
  import('./test-component/test.module').then((m) => m.TestModule);
const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'profile', loadChildren: profileModule },
  { path: 'testModule', loadChildren: testModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
