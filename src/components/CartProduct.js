import { useState } from "react"
import styled from "styled-components"
import plus from "../assets/images/plus.png"
import minus from "../assets/images/minus.png"

export default function CartProduct () {
    const [num, setNum] = useState(1)
    if (num<1) setNum(1)

    return (
        <Container>
            <Img 
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="product image"
            />

            <aside>
                <Nome>Cadeira Future</Nome>
                <Cor>Cor orvalho</Cor>
                <Preco>R$ 1.300,00</Preco>
            </aside>

            <QntButton>
                <Button onClick={() => setNum(num+1)}>
                    <img src={plus} alt="plus button"/>
                </Button>

                <Num>{num}</Num>

                <Button onClick={() => setNum(num-1)}>
                    <img src={minus} alt="minus button"/>
                </Button>
            </QntButton>

        </Container>
   )
}

const Container = styled.div`
    height: 83.19999694824219px;
    width: 260px;
    border-radius: 10px;
    background-color: #3E6063;

    display: flex;
    align-items: center;

    aside {
        height: 65px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    position: relative;
`
const Img = styled.img`
    height: 65px;
    width: 65px;
    border-radius: 5px;

    margin: 10px;
`
const Nome = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;

    display: block;
`
const Cor = styled.p`
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: #878C8D;

    display: block;
`
const Preco = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFEFD6;
`
const QntButton = styled.div`
    height: 24px;
    width: 66px;
    border-radius: 14px;
    padding: 2px;
    background-color: #022329;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 50px;
    left: 185px;
`
const Button = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 100%;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`
const Num = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFAFA;
`