import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import { IProduct } from "../../interfaces/IProduct";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Product from "./components/Product";
import Filters from "./components/Filters";


const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<[IProduct]>();

  const filter = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const setMessage = useContext(MessageContext);

  useEffect(() => loadProducts(), []);

  function loadProducts() {
    addRequest();
    ProductsService()
      .then((p) => {
        setProducts(p);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  
  const sortByName = (e: React.MouseEvent<HTMLInputElement>) =>{
    let orderByName = products?.sort();
    setProducts(orderByName);
  }

  return (
    <main className="main">
      <Breadcrumbs></Breadcrumbs>
      <Filters></Filters>
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products?.map((p) => (
                <Link className="products__card card" to={`/product/${p.sku}`}>
                  <Product
                    key={p.sku}
                    sku={p.sku}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                  />
                </Link>
              ))}
          </ol>
        </div>
        <div className="products__row">
          <ol className="products__list"></ol>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
