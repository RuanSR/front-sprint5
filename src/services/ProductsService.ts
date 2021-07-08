import { IProduct } from "../interfaces/IProduct";

export default function ProductsService(): Promise<[IProduct]> {
    return fetch('/data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json();
      })
      .then(data => {
        return data.products;
      })
}

