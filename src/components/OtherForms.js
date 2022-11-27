import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Otherforms ({setValidate}) {
    const [data, setData] = useState({
      nome:"",
      cpf:"",
      inst: ""
    })
    useEffect(() => {
      if (!data.nome || !data.cpf || !data.inst) {
        setValidate("Todas as informções são necessárias!")
      }
    }, [data, setValidate])

    return (
        <StyledForm>
            <input placeholder="Nome do comprador"
            onChange={(e)=> {setData({...data, nome: e.target.value})}}/>

            <input placeholder="CPF"
            onChange={(e)=> {setData({...data, cpf: e.target.value})}}/>

            <input placeholder="Intituição de pagamento"
            onChange={(e)=> {setData({...data, inst: e.target.value})}}/>
        </StyledForm>
    )
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 255px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  margin: 50px 0 30px;

  input {
    width: 100%;

    height: 46px;

    background: rgba(235, 235, 235, 1);    
    border-radius: 15px;
    padding: 5px 20px;
    font-size: 16px;

    border: none;
  }

  input::placeholder {
    color: #878c8d;
  }

  button {
    width: 100%;
    max-width: 200px;
    min-width: 140px;
    height: 60px;

    color: #f0ebce;
    background: #073c47;
    border-radius: 10px;

    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
