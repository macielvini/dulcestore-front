import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  return (
    <>
      <PageContainer>
        <p>Home</p>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/checkout"}>Checkout</Link>
        <Link to={"/product/:1"}>Product</Link>
        <ProductsContainer>
          <ProductCard
            imageSource={
              "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            name="Banquinho"
            price="R$ 3.199,90"
          />
          <ProductCard
            imageSource={
              "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            name="Banquinho de madeira"
            price="R$ 3.199,90"
          />
        </ProductsContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  padding: 25px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 20px;

  justify-content: center;
`;
