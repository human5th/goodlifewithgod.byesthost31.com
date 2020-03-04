import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  mockUrl = 'http://localhost:3000/Products';

  currentProduct: Product = {
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

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.mockUrl, headerOption);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  createProduct(prod: Product): Observable<Product> {
    return this.http.post<Product>(this.mockUrl, prod, headerOption);
  }

  updateProduct(prod: Product): Observable<Product> {
    return this.http.put<Product>(this.mockUrl + '/' + prod.id, prod, headerOption);
  }
}
