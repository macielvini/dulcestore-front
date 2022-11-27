import { useState } from "react"
import styled from "styled-components"
import { useAuth } from "../context/authContext"

export default function Infos ({preco}) {
    const {cep, setCep} = useAuth()
    const [validate, setValidate] = useState("")

    function  validar () {
      console.log(cep)
      setCep(cep.replace("-",""))
    
      if (isNaN(cep) || cep.length !== 8) {
        setValidate("Cep inválido, tente novamente!")
        return
      }

      setValidate("Frete grátis para sua casa!")
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
                  <input placeholder="CEP" value={cep}
                  onChange={(e) => setCep(e.target.value)}/>
                  <button onClick={validar}><p>Calcular</p></button>
                </div>
            </Frete>

            <Validate>{validate}</Validate>
        </>
    )
}

const Subtotal = styled.div`
  width: 255px;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }
`
const Frete = styled.div`
  width: 255px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }

  div {
    display: flex;
    gap: 2px;
  }

  div input {
    height: 24px;
    width: 106px;
    left: 138px;
    top: 522px;
    border-radius: 5px;
    border: 1px solid #000000;

    padding-left: 10px;
    
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  div button {
    height: 24px;
    width: 51px;
    left: 246px;
    top: 522px;
    border-radius: 5px;
    border: none;
    background-color: #073C47;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div button p {
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
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