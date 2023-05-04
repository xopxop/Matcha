import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const authenticationModule = () =>
//   import('./authentication-temp/authentication.module').then(
//     (m) => m.AuthenticationModule
//   );
// const profileModule = () =>
//   import('./profile/profile.module').then((m) => m.ProfileModule);
// const testModule = () =>
//   import('./test-component/test.module').then((m) => m.TestModule);

const homePageModule = () => import('./routed-pages/home-page/home-page.module').then((m) => m.HomePageModule)
const appPageModule = () => import('./routed-pages/app-page/app-page.module').then((m) => m.AppPageModule);
const errorPageModule = () => import('./routed-pages/error-page/error-page.module').then((m) => m.ErrorPageModule);

const routes: Routes = [
  { path: '', loadChildren: homePageModule },
  { path: 'error', loadChildren: errorPageModule },
  { path: 'app', loadChildren: appPageModule },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  // { path: 'testModule', loadChildren: testModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
