import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

const routes: Routes = [
  { path: '', component: ErrorPageComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
}) export class ErrorPageRoutingModule {}