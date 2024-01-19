import { Product } from './../category.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  product: any = {
    id: '',
    nombre: '',
  }

  products = JSON.parse(localStorage.getItem('category'));

  constructor(private productService: CategoryService,
      private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    const filterProduct = this.products.find((item) => item.id === this.product.id);
    if (filterProduct == null || filterProduct == undefined) {
      this.products.push(this.product)
      localStorage.setItem('category', JSON.stringify(this.products));
      this.productService.showMessage('Categoria Creado!')
      this.router.navigate(['/category'])
    } else { 
      this.productService.showMessage('Categoria existente!')
      return;
    }
     
    

  }

  cancel(): void {
    this.router.navigate(['category'])
  }
}
