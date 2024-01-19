import { CategoryService } from './../category.service';
import { Product } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  product: Product[]
  displayedColumns = ['id', 'nombre', 'action']
  products = JSON.parse(localStorage.getItem('category'));
  
  constructor(private productService: CategoryService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      if (this.products == null || this.products.length == 3) {
        console.log("Igual al mock")
        this.product = products
        localStorage.setItem('category', JSON.stringify(this.product));
        
      } else {
       console.log("Diferente al mock")
        this.product = this.products
      }
      
      
    })
  }

}
