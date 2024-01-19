import { Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from "./../category.service";
import { Product } from "./../category.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"],
})
export class CategoryDeleteComponent implements OnInit {
  product: Product;
  products = JSON.parse(localStorage.getItem('category'));
  constructor(
    private productService: CategoryService,
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

    localStorage.setItem('category', JSON.stringify(filterProduct));
    
      this.productService.showMessage("Categoria excluido con exito!");
      this.router.navigate(["/category"]);
   
  }

  cancel(): void {
    this.router.navigate(["/category"]);
  }
}
