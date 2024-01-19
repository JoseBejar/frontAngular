import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryCrudComponent } from './views/category-crud copy/category-crud.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { IndexComponent } from './components/template-front/index/index.component';
import { CarComponent } from './components/template-front/car/car.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "car",
    component: CarComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "category",
    component: CategoryCrudComponent
  },
  {
    path: "category/create",
    component: CategoryCreateComponent
  },
  {
    path: "category/update/:id",
    component: CategoryCreateComponent
  },
  {
    path: "category/delete/:id",
    component: CategoryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
