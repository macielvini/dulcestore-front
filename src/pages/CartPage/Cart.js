import styled from "styled-components";
import CartProduct from "../../components/CartProduct";

export default function Cart() {
  return (
    <Background>
      <Container>
        <CartProduct/>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FDFBF0;

  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const Container = styled.div`
  height: 650px;
  width: 300px;
  border-radius: 15px;
  background-color: #FFFFFF;
`