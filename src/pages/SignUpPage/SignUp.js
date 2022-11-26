import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import { SignUp } from "../../services/api";

export default function Sign() {
  const navigate = useNavigate();
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

    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirm: form.passwordConfirm,
    };

    SignUp(body)
      .then(() => {
        let timerInterval;
        Swal.fire({
          title: "Conta criada com sucesso!",
          icon: "success",
          html: "Voce será redirecionado automaticamente em <b></b> segundos.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = parseInt(Swal.getTimerLeft() / 1000);
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });

        navigate("/sign-in");
      })
      .catch((err) => {
        const messages = err.response.data.message.map(
          (message) => `\n${message}\n`
        );
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: messages,
        });
      });
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
              required
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={(e) => formHandler(e)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={form.password}
              onChange={(e) => formHandler(e)}
              required
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={(e) => formHandler(e)}
              required
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
