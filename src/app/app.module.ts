import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { cheropipes } from './custompipes/cheropipes';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CustompipesComponent,
    cheropipes,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
