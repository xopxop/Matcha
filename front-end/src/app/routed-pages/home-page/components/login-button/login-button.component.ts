import { EventEmitter } from "@angular/core";
import { Component, Input, Output } from "@angular/core";

@Component({
  selector: 'matcha-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: [
    './login-button.component.scss'
  ]
})
export class LoginButtonComponent {
  @Input() logoUrl: string | undefined;
  @Input() text: string | undefined;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.clickEvent.emit();
  }
}