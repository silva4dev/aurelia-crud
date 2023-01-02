import { HttpClient } from "aurelia-fetch-client";
import { Product } from "../register-product/register-product.model";

const http = new HttpClient();
const baseUrl = "http://localhost:3001/products";

export class ProductService {

  get(): Promise<any> {
    return http.fetch(baseUrl);
  }

  post(data: Product): Promise<any> {
    return http.fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  put(id: number, data: Product): Promise<any> {
    return http.fetch(baseUrl + "/" + id, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  delete(id: number): Promise<any> {
    return http.fetch(baseUrl + "/" + id, {
      method: "DELETE",
    });
  }

}
