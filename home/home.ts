import { ProductService } from "../services/register-product-service";
import { Router } from "aurelia-router";
import { inject } from 'aurelia-framework';

const http = new ProductService();

@inject(Router)
export class Index {
  products: Array<[]> = [];

  constructor(private router: Router) {
    this.getAllProducts();
  }

  async getAllProducts() {
    try {
      const response = await http.get();
      const data = await response.json();
      data.forEach((products: []) => {
        this.products.push(products);
      });
    } catch (err) {
      console.log(err);
    }
  }
  async deleteProduct(id: number) {
    try {
      await http.delete(id);
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

}
