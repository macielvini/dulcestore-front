import {  useEffect, useState } from "react";
import styled from "styled-components"
import { useAuth } from "../context/authContext";
import {AiFillCheckSquare} from "react-icons/ai"

export default function CepCheckout ({validate, setValidate}) {
    const {cep, setCep} = useAuth()
    const [check, setCheck] = useState(false)

    useEffect(() => {
        if (isNaN(cep) || cep.length !== 8) {
            setValidate("Cep inválido, tente novamente!")
            return
          }
        setValidate("")
    },[cep, setValidate])


    function salvar () {
        setCheck(!check)
       
        if (check) {
            localStorage.setItem("cep", cep)
            console.log("ok")
        } else {
            localStorage.removeItem("cep")
            console.log("ok")
        }
    }
    return (
        <>
            <TextoDescp>Cep para entrega</TextoDescp>
            <CepInput placeholder="CEP" value={cep}
            onChange={(e)=> setCep(e.target.value)}/>

            <Container>
                <Checkbox onClick={salvar} check={check}>
                    {check ? <AiFillCheckSquare className="icon"/> : <></>}
                </Checkbox>
                <Texto>Lembrar-me</Texto>
            </Container>
        </>
    )
}

const CepInput = styled.input`
    width: 255px;

    height: 46px;

    background: rgba(235, 235, 235, 1);    
    border-radius: 15px;
    padding: 5px 20px;
    font-size: 16px;

    border: none;

  &&::placeholder {
    color: #878c8d;
  }
`
const TextoDescp = styled.p`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color:  #878c8d;

  display: block;
  width: 255px;
  margin-bottom: 5px;
  padding: 7px;
`
const Container = styled.div`
    width: 250px;
    display: flex;
    gap: 10px;
    margin-top: 30px;
`

const Checkbox = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: 1px solid #000000;
    cursor: pointer;

    .icon {
        height: 20px;
        width: 20px;
        border-radius: 5px;
    }
`

const Texto = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`