import styled from "styled-components";
import cartIcon from "../assets/images/cart-icon.svg";

export default function ProductCard({ imageSource, name, price }) {
  return (
    <>
      <Container>
        <Card>
          <CardImage>
            <img src={imageSource} alt="" />
          </CardImage>
          <CardBottom>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <ButtonContainer>
              <BuyButton>Comprar</BuyButton>
              <CartButton>
                <img src={cartIcon} alt="cart icon" />
              </CartButton>
            </ButtonContainer>
          </CardBottom>
        </Card>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 200px;
  border-radius: 0px 0px 15px 15px;
`;

const Card = styled.div`
  min-width: 100px;
  width: 100%;
  max-width: 140px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const CardImage = styled.div`
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 70%;
  }

  overflow: hidden;
  border-radius: 15px 15px 0px 0px;
`;

const CardBottom = styled.div`
  width: 100%;
  min-height: 86px;

  background: #3e6063;

  border-radius: 0px 0px 15px 15px;
  padding: 8px;
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 12px;

  display: flex;
  align-items: center;

  color: #fffdfb;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 16px;

  color: #ffefd6;

  margin: 10px 0 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BuyButton = styled.button`
  padding: 5px 10px;

  background: #ffffff;
  border-radius: 7.06829px;

  color: #3e6063;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
`;

const CartButton = styled(BuyButton)`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
