import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../assets/images/back.png"
import CardForms from "../../components/CardForms";
import ChooseMethode from "../../components/ChooseMethod";
import Otherforms from "../../components/OtherForms";

export default function Checkout() {
  const navigate = useNavigate ()
  const [select, setSelect] = useState("")

  return (
    <Background>
      <Img><img src={back} alt="back icon" onClick={() => navigate("/cart")}/></Img>
      <Titulo>Forma de pagamento</Titulo>

      <ChooseMethode select={select} setSelect={setSelect}/>

      {select === "cartao" ? <CardForms/> : 
      select === "pix" || select === "boleto" ? <Otherforms/> :
      <Texto>Escolha a forma de pagamento</Texto> }
      
    </Background>
  );
}


const Background = styled.div`
  min-height: 100vh;
  background-color: #FAFCFC;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 40px;
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
const Texto = styled.p`

`