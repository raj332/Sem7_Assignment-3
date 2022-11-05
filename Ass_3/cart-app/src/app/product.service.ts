import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/product/';
  
  addProduct(item:Product){
    return this.http.post(this.url,item)
  }
  getProducts(){
    return this.http.get<Product[]>(this.url);
  }
  editProduct(item:Product){
   return  this.http.put(this.url,item)
  }
  deleteProduct(item:Product){
    return this.http.post(this.url+"/delete" ,item)

  }

}

