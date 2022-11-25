import styled from "styled-components";
import CartProduct from "../../components/CartProduct";

import back from "../../assets/images/back.png"
import { useNavigate } from "react-router-dom";
import Infos from "./infos";

export default function Cart() {
  const navigate = useNavigate()

  return (
    <Background>
        <Img><img src={back} alt="back icon" onClick={() => navigate("/")}/></Img>
        <Titulo>Meu carrinho</Titulo>

        <ContainerProducts>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
        </ContainerProducts>

        <Subtitulo>Informações do pedido</Subtitulo>

        <Infos preco={"R$ 5.550,80"}/>  
        <Div/>

        <Total>
          <p>Total</p>
          <p>R$ 5.550,80</p>
        </Total>
     </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  background-color: #FAFCFC;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Img = styled.div`
  width: 255px;
  height: 70px;
  
  img{
    height: 20px;
    width: 20px;
    margin-top: 50px;

    cursor: pointer;
  }
`
const Titulo = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color:#000000;

  display: block;
  width: 255px;
  margin-top: 15px;
  margin-bottom: 15px;
`
const Subtitulo = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;

  display: block;
  width: 255px;
  margin-top: 25px;
`
const Div = styled.div`
  height: 1px;
  width: 250px;
  background-color: #7979791C;
  margin-top: 14px;
`
const Total = styled.div`
  width: 255px;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
  }
`