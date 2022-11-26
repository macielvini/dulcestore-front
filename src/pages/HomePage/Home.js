import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import { getProductList } from "../../services/api";
import { useEffect, useState } from "react";
import { numberToFormatBrl } from "../../utils/vanillaFunctions";

export default function Home() {
  const [productList, setProductList] = useState([]);

  function getProducts() {
    getProductList()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <PageContainer>
        <ProductsContainer>
          {productList.length > 0
            ? productList.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  imageSource={product.image}
                  name={product.name}
                  price={numberToFormatBrl(product.value)}
                />
              ))
            : "Carregando produtos"}

          <ProductCard
            imageSource={
              "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            name="Banquinho"
            price="R$ 3.199,90"
          />
        </ProductsContainer>
      </PageContainer>
      <Navbar />
    </>
  );
}

const PageContainer = styled.div`
  padding: 75px 25px 25px;
  display: flex;
  width: 100%;
`;

const ProductsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 20px;

  justify-content: center;

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
