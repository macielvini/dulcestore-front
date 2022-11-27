import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../assets/images/back.png"
import CardForms from "../../components/CardForms";
import CepCheckout from "../../components/CepCheckout";
import ChooseMethode from "../../components/ChooseMethod";
import Otherforms from "../../components/OtherForms";

export default function Checkout() {
  const navigate = useNavigate ()
  const [select, setSelect] = useState("")
  const [validate, setValidate] = useState("")

  function finalizar () {
    if (!validate) {
      navigate("/")
    }
  }
  return (
    <Background>
      <Img><img src={back} alt="back icon" onClick={() => navigate("/cart")}/></Img>
      <Titulo>Forma de pagamento</Titulo>

      <ChooseMethode select={select} setSelect={setSelect}/>

      {select === "cartao" ? <CardForms validate={validate} setValidate={setValidate}/> : 
      select === "pix" || select === "boleto" ? <Otherforms validate={validate} setValidate={setValidate}/> :
      <Texto>Escolha a forma de pagamento</Texto> }
      
      <CepCheckout validate={validate} setValidate={setValidate}/>

      <Validate>{validate}</Validate>

      <Button><p>FINALIZAR O PAGAMENTO</p></Button>
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
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #878c8d;

  display: block;
  width: 255px;
  height: 175px;
  margin-top: 60px;
`
const Validate = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #3A8891;

  display: block;
  width: 255px;
`

const Button = styled.div`
  height: 49px;
  width: 300px;
  border-radius: 8px;
  background-color: #073C47;

  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFEFD6;
  }
`