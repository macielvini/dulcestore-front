import styled from "styled-components";
import CartProduct from "../../components/CartProduct";

import { useNavigate } from "react-router-dom";
import Infos from "../../components/InfosCart";
import * as AiIcons from "react-icons/ai";
import { useEffect, useState } from "react";
import { getCart } from "../../services/api";

export default function Cart() {
  const navigate = useNavigate();

  const [carts, setCarts] = useState([])

  useEffect(()=>{
    getCart()
    .then((res)=>{
      setCarts(res.data.products)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[])


  return (
    <Background>
      <BackButton>
        <AiIcons.AiOutlineArrowLeft onClick={() => navigate("/")} />
      </BackButton>
      <Titulo>Meu carrinho</Titulo>

      <ContainerProducts>
        {carts.map((cart)=>{
          return(
            <>
              <CartProduct props={cart}/>
            </>
          )
        })}
      </ContainerProducts>

      <OrderInfo>
        <Subtitulo>Informações do pedido</Subtitulo>
        <Infos preco={"R$ 5.550,80"} />
        <Total>
          <p>Total</p>
          <p>R$ 5.550,80</p>
        </Total>
      </OrderInfo>

      <Button onClick={() => navigate("/checkout")}>IR PARA O PAGAMENTO</Button>
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 400px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 50px 25px 25px;
`;

const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`;

const BackButton = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  cursor: pointer;

  border-radius: 50%;
  padding: 5px;

  background: #fafcfc;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    background: #cacaca;
  }
`;

const Titulo = styled.p`
  font-size: 20px;
  font-weight: 600;

  width: 100%;
`;

const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: center;
`;

const Subtitulo = styled.p`
  font-size: 20px;
  font-weight: 500;

  width: 100%;

  margin-top: 25px;
`;

const Total = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;

  font-weight: 600;
`;

const Button = styled.div`
  width: 100%;
  max-width: 250px;

  padding: 10px;
  border-radius: 8px;
  background-color: #073c47;

  margin-top: 45px;

  text-align: center;
  align-self: center;

  cursor: pointer;

  font-weight: 700;
  color: #ffefd6;
`;
