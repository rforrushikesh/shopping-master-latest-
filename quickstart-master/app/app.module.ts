import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {SignInComponent } from './signin/signin.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {HttpModule } from '@angular/http';
import {StarComponent } from './shared/star.component';
import {RouterModule } from "@angular/router";
@NgModule({
  imports: [ BrowserModule , FormsModule , HttpModule , RouterModule.forRoot([
          {path: 'signin', component : SignInComponent},
          {path:'products' , component: ProductListComponent},
          {path: '' , redirectTo: 'signin' , pathMatch: 'full'},
          {path: '**', redirectTo:'signin', pathMatch:'full'}
         ])
  
  ],
  declarations: [ AppComponent , ProductListComponent, SignInComponent , ProductFilterPipe ,StarComponent] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
