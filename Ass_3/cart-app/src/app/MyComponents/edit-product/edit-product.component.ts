import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from "@angular/router";
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  item:any;
  name!:string ;
description!:string;
price!:number;
quantity!:number;


  constructor(private activeRoute:ActivatedRoute ,private apiService:ProductService,private router:Router) { 
    this.item = JSON.parse(activeRoute.snapshot.params["item"])
    console.log(this.item);
    this.name= this.item.name ;
    this.description=this.item.description;
    this.price= this.item.price;
    this.quantity =this.item.quantity;

  }

  ngOnInit(): void {
  }
onUpdate(){
  this.item.quantity=this.quantity ;
  this.item.totalamount=( this.quantity*this.price) ;
  this.apiService.editProduct(this.item).subscribe((res)=>{
    this.router.navigate(['/'])
  })
}
}
