import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(`${REACT_APP_API_URL}/products`, config);

    promise.then((response) => {
      setProducts(response.data);
    });
  }, [token, REACT_APP_API_URL]);

  function ToNewProductPage() {
    navigate("/new");
  }

  function RenderProducts() {
    if (!products.length) {
      return <p>Não há produtos cadastrados</p>;
    }

    return (
      <Container>
        <Title>
          <h2>Your products</h2>
          <h3 onClick={ToNewProductPage}>Add new product</h3>
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
  justify-content: space-between;
`;

export default ProductList;
