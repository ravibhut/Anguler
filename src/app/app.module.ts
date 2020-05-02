import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientXsrfModule,
    ButtonsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: "", component: HomeComponent }
    // ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
