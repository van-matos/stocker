import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";
import styled from "styled-components";

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
      setProducts(response.data);
    });
  }, [token]);

  function RenderProducts() {
    if (!products.length) {
      return <p>Não há produtos cadastrados</p>;
    }

    return (
      <Container>
        <Title>
          <h2>Your products</h2>
        </Title>

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

  table {
    border: 1px solid;
  }

  th {
    border: 1px solid;
  }

  td {
    border: 1px solid;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export default ProductList;
