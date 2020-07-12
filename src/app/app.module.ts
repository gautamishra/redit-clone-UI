import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoenents/header/header.component';
import { LoginComponent, SignUpComponent } from './auth/components';
import { TokenInterceptor } from './service/token-interceptor';
import { HomeReditComponent } from './compoenents/home-redit/home-redit.component';
import { PostTileComponent } from './compoenents/post-tile/post-tile.component';
import { SideBarComponent } from './compoenents/side-bar/side-bar.component';
import { SubreditSideBarComponent } from './compoenents/subredit-side-bar/subredit-side-bar.component';
import { VoteButtonComponent } from './compoenents/vote-button/vote-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeReditComponent,
    PostTileComponent,
    SideBarComponent,
    SubreditSideBarComponent,
    VoteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    CookieService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
