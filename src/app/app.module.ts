import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { BannerGroupComponent } from './banner-group/banner-group.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { VideoModalComponent } from './video-modal/video-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerGroupComponent,
    NavMenuComponent,
    AuthModalComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
