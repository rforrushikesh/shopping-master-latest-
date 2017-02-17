import { Component } from '@angular/core';
import {ProductsService } from './products/products.service';
import {Router} from '@angular/router';
@Component({
   moduleId: module.id,
  selector: 'my-app', 
  templateUrl:'page.html',
  styleUrls: ['page.css'],
  providers: [ProductsService]
})
export class AppComponent  { 
  name = 'Amazing shopping '; 
}
