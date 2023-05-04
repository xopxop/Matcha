import { NgModule } from "@angular/core";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { ErrorPageRoutingModule } from "./error-page-routing.module";

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    ErrorPageRoutingModule
  ]
}) export class ErrorPageModule {}