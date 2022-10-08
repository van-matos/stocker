import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    const signUp = {
      name,
      email,
      password,
      confirmPassword,
    };

    const promise = axios.post("http://localhost:5000/signup", signUp);
    promise.then(toLogin);
    promise.catch(failure);

    function toLogin() {
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    }

    function failure() {
      console.log(signUp);
      alert("Erro! Dados inválidos.");
    }
  }

  return (
    <Container>
      <h1>Stocker</h1>
      <Form onSubmit={submit}>
        <input
          type="name"
          id="name"
          value={name}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
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

export default SignupPage;
