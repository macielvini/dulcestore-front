import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../../components/Form";
import Logo from "../../components/Logo";

export default function Sign() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function formHandler(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log("oi");
  }

  return (
    <>
      <PageContainer>
        <FormContainer>
          <Logo />
          <Form onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="Nome"
              name="name"
              value={form.name}
              onChange={(e) => formHandler(e)}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={(e) => formHandler(e)}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={form.password}
              onChange={(e) => formHandler(e)}
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={(e) => formHandler(e)}
            />
            <button type="submit">Cadastrar</button>
          </Form>

          <Link to={"/sign-in"}>
            Já possui uma conta? <strong>Entre</strong>
          </Link>
        </FormContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  height: 100vh;
  padding: 25px;
  background: #3e6063;

  a {
    font-size: 12px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: #ffefd6;
  }

  border-radius: 20px;
`;
