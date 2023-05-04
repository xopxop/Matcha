import { NgModule } from "@angular/core";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { LoginModule } from "./modules/login/login.modules";
import { RegisterModule } from "./modules/register/register.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    LoginModule,
    RegisterModule
  ]
}) export class HomePageModule {}