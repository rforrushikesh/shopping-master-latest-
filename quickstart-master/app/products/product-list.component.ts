import {Component , OnInit} from '@angular/core';
import { Iproduct} from './products';
import {ProductsService} from './products.service';
import {Router } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl:'product-list.component (2).html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;
    listFilter: string ;
    products: Iproduct[];
    private _productsService: ProductsService;
    errorMessage : string;
    constructor(productsService : ProductsService) 
    {
        this._productsService = productsService;
    }
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    ngOnInit():void{
        console.log('In OnInit');
        this._productsService.getProducts().subscribe(products => this.products = products , error => this.errorMessage = <any>error);
    }
}