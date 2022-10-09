import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../context/UserContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const localToken = localStorage.getItem("token");
      if (localToken) {
        setToken(localToken);
        navigate("/home");
      }
    })();
  });

  function Login(e) {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const promise = axios.post("http://localhost:5000/login", user);

    promise.then((response) => toHome(response.data.token));
    promise.catch(failure);
  }

  function toHome(token) {
    console.log(token);
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/home");
  }

  function failure() {
    setEmail("");
    setPassword("");
    alert("usuário e/ou senha inválidos");
  }

  return (
    <Container>
      <h1>Stocker</h1>
      <Form onSubmit={Login}>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export default LoginPage;
