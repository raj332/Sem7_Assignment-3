import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

private shared:any ;
name!:string ;
description!:string;
price!:number;
quantity!:number;


  constructor(private router:Router, private apiService:ProductService) { 

  }
  ngOnInit(): void {
  }
  onSubmit(){
   const product:Product ={
    productId:Math.random(),
    name:this.name,
    description:this.description,
    quantity:this.quantity,
    totalamount:(this.quantity*this.price),
    price:this.price
   }
   this.apiService.addProduct(product).subscribe((res)=>{
    this.router.navigate(['/'])
   });
   
  }
}
