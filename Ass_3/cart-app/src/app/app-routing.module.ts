import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './MyComponents/add-products/add-products.component';
import { EditProductComponent } from './MyComponents/edit-product/edit-product.component';
import { ProductsComponent } from './MyComponents/products/products.component';

const routes: Routes = [
  {path:'addproduct',component:AddProductsComponent},
  {path:'editproduct/:item',component:EditProductComponent},
  {path:'**',component: ProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
