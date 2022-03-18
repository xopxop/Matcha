import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AccountService } from "../service/account.service";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { LogInFormComponent } from "./log-in-form/log-in-form.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [
    AccountComponent,
    LogInFormComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    AccountRoutingModule
  ],
})
export class AccountModule {}