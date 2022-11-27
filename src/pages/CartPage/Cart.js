import styled from "styled-components";
import CartProduct from "../../components/CartProduct";

import { useNavigate } from "react-router-dom";
import Infos from "./infos";
import * as AiIcons from "react-icons/ai";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <Background>
      <BackButton>
        <AiIcons.AiOutlineArrowLeft onClick={() => navigate("/")} />
      </BackButton>
      <Titulo>Meu carrinho</Titulo>

      <ContainerProducts>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ContainerProducts>

      <OrderInfo>
        <Subtitulo>Informações do pedido</Subtitulo>
        <Infos preco={"R$ 5.550,80"} />
        <Total>
          <p>Total</p>
          <p>R$ 5.550,80</p>
        </Total>
      </OrderInfo>
    </Background>
  );
}

const Background = styled.div`
  min-height: 100vh;
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
