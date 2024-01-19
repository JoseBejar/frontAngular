import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@app/components/category/category.service';
import { Product } from '@app/components/product/product.model';
import { ProductService } from '@app/components/product/product.service';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  product: Product[]
  car: Product[] = []
  carTotal = JSON.parse(localStorage.getItem('car'));
  products = JSON.parse(localStorage.getItem('products'));
  category = JSON.parse(localStorage.getItem('category'));
  selectCategory: any[] = []; 
  dataCategory: any[] = []; 
  public carouselOne: NgxCarousel;

  constructor(private productService: ProductService,private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory()
    this.productService.read().subscribe(products => {
      if (this.products == null || this.products.length == 3) {
        console.log("Igual al mock")
        this.product = products
        localStorage.setItem('products', JSON.stringify(this.product));
        
      } else {
       console.log("Diferente al mock", this.products)
        this.product = this.products
      }
      this.getCategoryForProduct(this.product)
      
    })
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }



  addCar(item : any){
    console.log("CARRO", item)
    
    
    if (this.carTotal == null) {
      this.car.push(item)
      localStorage.setItem('car', JSON.stringify(this.car));
    } else { 
      this.carTotal.push(item)
      localStorage.setItem('car', JSON.stringify(this.carTotal));
    }
    this.router.navigate(['/car'])
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

  getCategoryForProduct(data : any){
    console.log("CATEEEEEEEEEEEEEEEEEEEE", data)
    console.log("CATEEEEEEEEEEEEEEEEEEEE", this.selectCategory)

    var dataCategory = []
        var datas = []
        for (let index = 0; index < this.selectCategory.length; index++) {
          datas = data.filter(estado => estado.idcategoria === this.selectCategory[index].id);

          dataCategory.push({
            id: this.selectCategory[index].id,
            nombre: this.selectCategory[index].nombre,
            cantidad: datas.length + 1
          })
        }

        this.dataCategory = dataCategory

  }

}
