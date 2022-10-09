import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../context/UserContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const promise = await axios.post(`${REACT_APP_API_URL}/login`, user);
      setToken(promise.data.token);
      localStorage.setItem("token", promise.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
      alert("usuário e/ou senha inválidos");
    }
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
