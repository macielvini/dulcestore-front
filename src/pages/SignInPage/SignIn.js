import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import * as AiIcons from "react-icons/ai";
import { api, signIn } from "../../services/api";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
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

    signIn(form)
      .then(({ data }) => {
        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        localStorage.setItem("user", JSON.stringify(data));
        setUser({ token: data.token, name: data.name, email: data.email });

        navigate("/");
      })
      .catch((err) => {
        let message;
        if (err.response?.status === 401) {
          message = "E-mail e/ou senha incorreto(s)";
        } else {
          message = "Algo deu errado, tente novamente!";
        }

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
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
              placeholder="Entre com seu e-mail"
              name="email"
              value={form.email}
              onChange={(e) => formHandler(e)}
              required
            />
            <input
              type="password"
              placeholder="Entre com a sua senha"
              name="password"
              value={form.password}
              onChange={(e) => formHandler(e)}
              required
            />
            <Checkbox onClick={() => setRemember(!remember)}>
              {remember ? (
                <AiIcons.AiFillCheckSquare className="icon" />
              ) : (
                <AiIcons.AiOutlineBorder className="icon" />
              )}
              <span>Lembrar-me</span>
            </Checkbox>
            <button>Login</button>
          </Form>

          <Link to={"/sign-up"}>
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
  gap: 8px;

  width: 100%;

  color: #fff;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  .icon {
    font-size: 24px;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
