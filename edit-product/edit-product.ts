import { ProductService } from "../services/register-product-service";
import { Router } from "aurelia-router";
import { inject } from 'aurelia-framework';

const http = new ProductService();

@inject(Router)
export class EditProduct {

  id: number;
  productName= "";
  productPrice = 0;

  activate(params){
    this.id = params.id;
  }

  constructor(private router: Router) {
    this.getProduct();
  }

  async getProduct() {
    const response = await http.get();
    const data = await response.json();
    data.forEach((product) => {
      if(product.id == this.id) {
        this.productName = product.name;
        this.productPrice = product.price;
      }
    })
  }

  async updateProduct() {
    try {
      await http.put(this.id, {
        name: this.productName,
        price: this.productPrice
      });
      this.router.navigateToRoute("home");
    } catch(err) {
      console.log(err);
    }
  }

}
