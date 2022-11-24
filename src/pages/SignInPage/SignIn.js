import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../../components/Form";
import Logo from "../../components/Logo";

export default function SignIn() {
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
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
              placeholder="Entre com seu e-mail"
              name="email"
              value={form.email}
              onChange={(e) => formHandler(e)}
            />
            <input
              type="password"
              placeholder="Entre com a sua senha"
              name="password"
              value={form.password}
              onChange={(e) => formHandler(e)}
            />
            <Checkbox onClick={() => setRemember(!remember)}>
              {remember ? (
                <span className="material-symbols-rounded">check_box</span>
              ) : (
                <span className="material-symbols-rounded">
                  check_box_outline_blank
                </span>
              )}
              <span>Lembrar-me</span>
            </Checkbox>
            <button>Login</button>
          </Form>

          <Link to={"/"}>
            Não possui uma conta? <strong>Cadastre-se</strong>
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

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;

  color: #fff;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
