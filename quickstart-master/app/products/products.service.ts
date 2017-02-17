import {Injectable} from '@angular/core';
import { Iproduct } from './products';
import {Http , Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
 @Injectable()
export class ProductsService{
    private _http: Http;
    private _productUrl = 'api/products/products.json';
    constructor(http : Http)    
    {
        this._http = http;
    }
    getProducts(): Observable<Iproduct[]>
    {
        return this._http.get(this._productUrl).map((response : Response ) => <Iproduct[]> response.json())
        .do(data => console.log('All ' + JSON.stringify(data))).catch(this.handleError);
    }
    handleError(error : Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}