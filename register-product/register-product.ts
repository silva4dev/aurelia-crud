import { ProductService } from "../services/register-product-service";
import { Router } from "aurelia-router";
import { inject } from 'aurelia-framework';

const http = new ProductService();

@inject(Router)
export class RegisterProduct {
  
  name: string;
  price: number;

  constructor(private router: Router) {}

  async addProduct() {
    try {
      await http.post({
        name: this.name,
        price: this.price,
      });
      this.name = "";
      this.price = null;
      this.router.navigateToRoute("home");
    } catch (err) {
      console.log(err);
    }
  }
}
