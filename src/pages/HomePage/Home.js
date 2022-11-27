import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import { getProductList } from "../../services/api";
import { useEffect, useState } from "react";
import { numberToFormatBrl } from "../../utils/vanillaFunctions";

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [showCartMessage, setShowCartMessage] = useState(false);

  function displayAlert() {
    setShowCartMessage(true);
    setTimeout(() => setShowCartMessage(false), 2000);
  }

  function getProducts() {
    getProductList()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar showCartMessage={showCartMessage} />
      <PageContainer>
        <ProductsContainer>
          {productList.length > 0 ? (
            productList.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                imageSource={product.image}
                name={product.name}
                price={numberToFormatBrl(product.value)}
                displayAlert={displayAlert}
              />
            ))
          ) : (
            <div>Carregando produtos</div>
          )}
        </ProductsContainer>
      </PageContainer>
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
