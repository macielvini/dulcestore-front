import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import QuantityButton from "../../components/QuantityButton";
import { numberToFormatBrl } from "../../utils/vanillaFunctions";

export default function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { image, name, value, description } = location.state;

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Container>
        <BackButton>
          <AiIcons.AiOutlineArrowLeft onClick={() => navigate(-1)} />
        </BackButton>
        <ImageContainer>
          <img src={image} alt="foto do produto" />
        </ImageContainer>
        <ProductInfo>
          <h1>{name}</h1>
          <PriceContainer>
            <p>{numberToFormatBrl(value)}</p>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          </PriceContainer>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
          <ProductDetails>
            <p>Detalhes</p>
            <Details>{description}</Details>
          </ProductDetails>
        </ProductInfo>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const ImageContainer = styled.div`
  background-color: #fff;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-height: 360px;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ProductInfo = styled.div`
  /* background-color: coral; */

  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;
  max-width: 570px;
  padding: 25px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  max-width: 250px;

  align-self: center;
  text-align: center;
  gap: 10px;

  padding: 15px;

  background: #073c47;
  border-radius: 10px;

  text-transform: uppercase;
  color: #ffefd6;
  font-weight: 700;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  color: #fff;

  p {
    font-weight: 600;
    font-size: 20px;
    color: #000;
  }
`;

const ProductDetails = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
  }
`;

const Details = styled.div`
  background-color: #fafafa;
  border-radius: 10px;

  font-weight: 400;
  font-size: 12px;

  color: #4a4747;

  background-color: #dadada;

  padding: 10px;
  margin-top: 10px;
`;
