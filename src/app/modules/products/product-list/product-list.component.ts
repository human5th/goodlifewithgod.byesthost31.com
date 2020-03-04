import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProduct: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.allProduct = data;
      });
  }
  deleteProduct(id: number) {
   console.log(id);
   this.productService.deleteProduct(id).subscribe(
     (data: Product) => {
        this.getAllProduct();
     }
   );
  }
  edit(emp) {
    this.productService.currentProduct = Object.assign({}, emp);

  }

}
