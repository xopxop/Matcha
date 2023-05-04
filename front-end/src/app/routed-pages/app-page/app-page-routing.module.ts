import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPageComponent } from "./components/app-page/app-page.component";

const routes: Routes = [
  { path: '', component: AppPageComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
}) export class AppPageRoutingModule {}