import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3000/product'

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get(this.API_URL);
  }

  public getProductById(id: any) {
    return this.http.get(`${this.API_URL}/${id}`)
  }

  public createProduct(productData: any) {
    return this.http.post(this.API_URL, productData);
  }

  public updateProductById(id: any, productData: any) {
    return this.http.put(`${this.API_URL}/${id}`, productData);
  }

  public deleteProductById(id: any) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
