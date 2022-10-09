import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";

function ProductList() {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/products", config);

    promise.then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, [token]);

  function RenderProducts() {
    if (!products.length) {
      return <p>Não há produtos cadastrados</p>;
    }

    return products.map((product) => {
      const { id, barcode, name, description, quantity, price } = product;

      return (
        <div key={id}>
          <span>{barcode}</span>
          <span>{name}</span>
          <span>{description}</span>
          <span>{quantity}</span>
          <span>{price}</span>
        </div>
      );
    });
  }

  return <div>{RenderProducts()}</div>;
}

export default ProductList;
