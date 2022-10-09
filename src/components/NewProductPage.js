import { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

function NewProductPage() {
  const { token } = useContext(UserContext);
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function newProduct(e) {
    e.preventDefault();

    console.log(token);
    console.log(config);

    const entry = {
      barcode,
      name,
      description,
      quantity: Number(quantity),
      price: parseFloat(price),
    };

    const promise = axios.post(`${REACT_APP_API_URL}/products`, entry, config);
    promise.then(toHome);
    promise.catch((error) => alert(error.response.statusText));
  }

  function toHome() {
    alert("New product succesfully registered");
    Navigate("/home");
  }

  return (
    <>
      <Header />
      <div>
        <p>New product</p>
        <Form onSubmit={newProduct}>
          <input
            type="barcode"
            id="barcode"
            value={barcode}
            placeholder="Barcode"
            onChange={(e) => setBarcode(e.target.value)}
          />
          <input
            type="name"
            id="name"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="description"
            id="description"
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="quantity"
            id="quantity"
            value={quantity}
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="price"
            id="price"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Save new product</button>
        </Form>
      </div>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default NewProductPage;
