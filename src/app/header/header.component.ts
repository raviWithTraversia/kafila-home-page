import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
showMenu = false;
showAuthModal = true;
toggleMenu(){
  this.showMenu =!this.showMenu;
}
toggleAuthModal(){
  this.showAuthModal = !this.showAuthModal;
}
}
