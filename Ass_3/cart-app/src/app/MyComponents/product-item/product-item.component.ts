import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
tmp:any;
 @Input() item!:Product;
 @Output() productToDelete : EventEmitter <Product>= new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  onRemoveProduct(item:Product){
     this.productToDelete.emit(item);
  }
 
  onUpdateProduct(item:Product){
    this.router.navigate(['/editproduct',JSON.stringify(item)])
  }
}
