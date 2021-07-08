import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IProduct} from '../../interfaces/IProduct';

import ProductsService from '../../services/ProductsService';
import Breadcrumbs from "../products/components/Breadcrumbs";
import ProductContainer from "./components/ProductContainer";

const ProductDateils = () => {
  let {id} = useParams<{id:string}>();
  const [product, setProduct] = useState<IProduct | any>();

  useEffect(() => {
    ProductsService()
      .then((r) => {
        let productFiltred = r.filter((p) => p.sku.toString() === id);
        setProduct(productFiltred[0]);
      })
      .catch(() => console.log("Ocorreu um erro ao carregar os produtos..."))
  }, [id]);

  return (
    <div className="main">
      <Breadcrumbs />
      {product && <ProductContainer sku={product.sku} name={product.name} image={product.image} price={product.price} />}
    </div>
  );
}

export default ProductDateils;
