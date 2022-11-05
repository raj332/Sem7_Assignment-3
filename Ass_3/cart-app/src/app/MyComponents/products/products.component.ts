import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';

import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products!:Product[];
 item!:Product ;
response!:Boolean;
  constructor(private apiService:ProductService,private router:Router) {
this.router.routeReuseStrategy.shouldReuseRoute = () => false
   }

  ngOnInit(): void {
  console.log("initialized")
 this.apiService.getProducts().subscribe((data:Product[])=>{
this.products=data ;
 })
    
  }
  async handleDelete(item:Product){
    
      this.apiService.deleteProduct(item).subscribe((res)=>{
        this.ngOnInit();
      })
  }
  reloadCurrentRoute() {
    console.log("in route")
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
