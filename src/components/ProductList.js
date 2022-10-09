import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";
import styled from "styled-components";

function ProductList() {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(token);
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

    return (
      <Container>
        <h2>Your products</h2>

        <table>
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.barcode}</td>
                <td>{product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }

  return <div>{RenderProducts()}</div>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default ProductList;
