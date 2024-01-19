import { CategoryService } from '@app/components/category/category.service';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: any = {
    id: '',
    nombre: '',
    precio: '',
    idcategoria: '',
  }

  products = JSON.parse(localStorage.getItem('products'));
  category = JSON.parse(localStorage.getItem('category'));
  selectCategory: any[] = []; 

  constructor(private productService: ProductService, private categoryService: CategoryService,
      private router: Router) { }

  ngOnInit(): void {
    this.getCategory()
  }

  createProduct(): void {
    const filterProduct = this.products.find((item) => item.id === this.product.id);
    if (filterProduct == null || filterProduct == undefined) {
      this.products.push(this.product)
      localStorage.setItem('products', JSON.stringify(this.products));
      this.productService.showMessage('Producto Creado!')
      this.router.navigate(['/products'])
    } else { 
      this.productService.showMessage('Producto existente!')
      return;
    }
     
    

  }

  getCategory(){
    if (this.category == null || this.category == undefined) {
      this.categoryService.read().subscribe(category => {
        this.selectCategory = category
      })
    } else { 
      this.selectCategory = this.category
    }
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
