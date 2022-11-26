import styled from "styled-components"
import * as AiIcons from "react-icons/ai";
import pix from  "../assets/images/pix.png"

export default function ChooseMethode ({select, setSelect}) {
    return (
        <Container>
            <Option>
                <aside>
                    <AiIcons.AiFillCreditCard className="icon"/>
                    <p>CARTÃO DE CRÉDITO</p>
                </aside>
                <div onClick={()=>setSelect("cartao")}>
                    {select === "cartao" ? <Select/> 
                    : <></>} 
                </div>
            </Option>

            <Option>
                <aside>
                    <AiIcons.AiOutlineBarcode className="icon"/>
                    <p>BOLETO</p>
                </aside>
                <div onClick={()=>setSelect("boleto")}>
                    {select === "boleto" ? <Select/> 
                    : <></>} 
                </div>
            </Option>

            <Option>
                <aside>
                    <img src={pix} alt=""/>
                    <p>PIX</p>
                </aside>
                <div onClick={()=>setSelect("pix")}>
                    {select === "pix" ? <Select/> 
                    : <></>} 
                </div>
            </Option>
        </Container>
    )
}

const Container = styled.div`
`
const Option = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        width: 20px;
        height: 20px;
    }
    p {
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
    }
    aside {
        display: flex;
        gap: 10px;
    }
     div {
         height: 20px;
         width: 20px;
         border-radius: 100%; 
         border: 1px solid #022329;

         display: flex;
         justify-content: center;
         align-items: center;
        cursor: pointer;  
    } 
`
const Select = styled.span`
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #022329;
`