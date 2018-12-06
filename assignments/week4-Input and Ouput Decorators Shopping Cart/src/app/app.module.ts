import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Product1 } from './product1/product1';
import  {Product2} from './product2/product2';
import {Product3} from './product3/product3';
import {Product5} from './product5/product5';
import {Product4} from './product4/product4';

@NgModule({
  declarations: [
    AppComponent,
    Product1,
    Product2,
    Product3,
    Product4,
    Product5
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }