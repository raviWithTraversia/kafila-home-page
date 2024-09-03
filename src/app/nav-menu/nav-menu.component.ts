import { Component, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() toggleAuthModal = new EventEmitter<void>();
  toggleMenuEvent() {
    this.toggleMenu.emit();
  }
  toggleAuthModalEvent(){
    this.toggleAuthModal.emit();
    this.toggleMenu.emit();
  }
}
