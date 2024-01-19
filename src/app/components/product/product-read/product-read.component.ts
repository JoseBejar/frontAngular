import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/components/category/category.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product[]
  displayedColumns = ['id', 'nombre', 'precio' ,'idcategoria', 'action']
  products = JSON.parse(localStorage.getItem('products'));
  category = JSON.parse(localStorage.getItem('category'));
  selectCategory: any[] = []; 
  
  constructor(private productService: ProductService, private categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.getCategory()
    this.productService.read().subscribe(products => {
      if (this.products == null || this.products.length == 3) {
        console.log("Igual al mock")
        this.product = products
        localStorage.setItem('products', JSON.stringify(products));

        for (let index = 0; index < this.product.length; index++) {
          var filterProduct = this.selectCategory.find((item) => item.id === Number(this.product[index].idcategoria));
          this.product[index].idcategoria = filterProduct.nombre          
        }
      } else {
       console.log("Diferente al mock")
        this.product = this.products
        for (let index = 0; index < this.product.length; index++) {
          var filterProduct = this.selectCategory.find((item) => item.id === Number(this.product[index].idcategoria));
          this.product[index].idcategoria = filterProduct.nombre          
        }
      }
    })
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

}
