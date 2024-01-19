import { Component, OnInit } from '@angular/core';
import { Product } from '@app/components/product/product.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car = JSON.parse(localStorage.getItem('car'));
  buyProducts = 0;
  lengthProducts = 0;
  product: Product[] = []; 
  constructor() { }

  ngOnInit(): void {
    console.log("ADENTRO DEL CARRO", this.car)
    if (this.car != null || this.car!=undefined) {
      this.product =this.car
      this.lengthProducts = this.product.length
      console.log("LEEENGHT", this.lengthProducts)
    this.buyProduct()
    } else { 
      this.buyProducts = 0;
      this.lengthProducts = 0;
    }
    
  }

  buyProduct(){
    this.buyProducts = 0
    for (let index = 0; index < this.product.length; index++) {
      this.buyProducts = Number(this.product[index].precio) + Number(this.buyProducts);
    }
  }

  deleteProduct(id : any){
     var numero = 0;
     var Array = [];
     for (let index = 0; index < this.product.length; index++) {
      if (this.product[index].id == id) {
        numero ++;
        if (numero != 1) {
          Array.push(this.product[index])
        } else {
        }
      } else { 
        Array.push(this.product[index])
      }
      
    }
    this.product = Array
    if (this.product != null || this.product!=undefined) {
      this.lengthProducts = this.product.length
      localStorage.setItem('car', JSON.stringify(this.product));
    this.buyProduct()
    } else { 
      this.buyProducts = 0;
      this.lengthProducts = 0;
    }
     
  }

}
