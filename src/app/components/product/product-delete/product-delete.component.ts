import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  products = JSON.parse(localStorage.getItem('products'));
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const filterProduct = this.products.find((item) => item.id === id);
      this.product = filterProduct;
 
  }

  deleteProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const filterProduct = this.products.filter((item) => item.id != id);

    localStorage.setItem('products', JSON.stringify(filterProduct));
    
      this.productService.showMessage("Producto excluido con exito!");
      this.router.navigate(["/products"]);
   
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
