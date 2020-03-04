import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  // dateLivraison: Date;
  // dateRetour: Date;
  // clientName: string;
  // avance: number;
  // montant: number;
  // id: number;
  // designation: string;
  // quantity: number;
  // pu: number;
  clear() {
    this.productService.currentProduct = {
      dateLivraison: null,
      dateRetour: null,
      clientName: '',
      clientAddress: '',
      clientPhone: null,
      avance: null,
      montant: null,
      id: null,
      designation: '',
      quantity: null,
      pu: null
    };
  }

  ngOnInit() {
  }

  createAndUpdate(currentProduct: Product) {
    console.log(currentProduct);
    if (currentProduct.id != null) {
      console.log('update');
      this.updateProduct(currentProduct);
    } else {
      console.log('create');
      this.createProduct(currentProduct);
    }
  }

  createProduct(prod: Product) {
    this.productService.createProduct(prod).subscribe();
  }

  updateProduct(prod: Product) {
    this.productService.updateProduct(prod).subscribe();
  }

}
