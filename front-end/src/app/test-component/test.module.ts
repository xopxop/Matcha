import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import {MatCardModule } from '@angular/material/card'
import { LoginModule } from '../authentication-temp2/login/login.module';

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    TestRoutingModule,
    LoginModule
  ]
})
export class TestModule {}
