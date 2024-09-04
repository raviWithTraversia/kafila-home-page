import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
@Output() closeEvent =  new EventEmitter<void>();
showPassword = false;
triggerCloseEvent(){
  this.closeEvent.emit();
}
toggleShowPassword(){
  this.showPassword =!this.showPassword;
}
preventClose(event:Event){
  event.stopPropagation();
}
}
