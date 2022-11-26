import { useEffect, useState } from "react";
import styled from "styled-components";


export default function CardForms () {
    const [data, setData] = useState({
        num: "",
        validade: "",
        cvv: "", 
        nome: ""
    })

    return (
        <Form>
            <input placeholder="Número do cartão" 
            onChange={(e) => setData({...data, num: e.target.value})}/>
            <div className="div">
                <input className="p" placeholder="Validade"
                onChange={(e) => setData({...data, validade: e.target.value})}/>
                <input className="p" placeholder="CVV"
                onChange={(e) => setData({...data, cvv: e.target.value})}/>
            </div>
            <input placeholder="Nome do titular"
            onChange={(e) => setData({...data, nome: e.target.value})}/>
        </Form>
    )
}


const Form = styled.div`
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

  .p {
    width: 120px;
  }
  .div {
    width: 255numlex;
    justify-content: space-between;
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
