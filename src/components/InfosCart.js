import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/authContext";

export default function Infos({ preco }) {
  const { cep, setCep } = useAuth();
  const [validate, setValidate] = useState("");

  function validar() {
    setCep(cep.replace("-", ""));

    if (isNaN(cep) || cep.length !== 8) {
      setValidate(false);
      return;
    }

    setValidate(true);
  }

  return (
    <>
      <Subtotal>
        <p>Subtotal</p>
        <p>{preco}</p>
      </Subtotal>

      <Frete>
        <p>Frete</p>
        <div>
          <input
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength="8"
          />
          <button onClick={validar}>Calcular</button>
        </div>
      </Frete>

      {validate === "" ? (
        ""
      ) : (
        <Validate validate={validate}>
          {validate
            ? "Frete grátis para sua casa!"
            : "Cep inválido, tente novamente!"}
        </Validate>
      )}
    </>
  );
}

const Subtotal = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;

  font-size: 16px;
`;

const Frete = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 2px;
  }

  div input {
    max-width: 106px;
    border-radius: 5px;
    border: 1px solid #000000;

    padding-left: 10px;

    font-size: 13px;
  }

  div button {
    width: 51px;
    border-radius: 5px;
    background-color: #073c47;

    text-align: center;
    font-size: 10px;
    font-weight: 400;
    color: #ffffff;
  }
`;

const Validate = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: end;

  color: ${(props) => (props.validate ? "green" : "red")};

  width: 100%;
  margin-top: 5px;
`;
