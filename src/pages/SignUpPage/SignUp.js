import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../../components/Form";

export default function SignUp() {
  const [remember, setRemember] = useState(false);

  return (
    <>
      <PageContainer>
        <FormContainer>
          <Logo>Dulce</Logo>
          <Form onSubmit={() => console.log("oi")}>
            <input type="text" placeholder="Entre com seu e-mail" />
            <input type="password" placeholder="Entre com a sua senha" />
            <Checkbox onClick={() => setRemember(!remember)}>
              {remember ? (
                <span className="material-symbols-">check_box</span>
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
            Ou <strong>cadastre-se</strong>
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

const Logo = styled.h1`
  font-family: "Six Caps";
  font-size: 100px;

  color: #ffefd6;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;

  color: #fff;
  font-weight: 500;
`;
