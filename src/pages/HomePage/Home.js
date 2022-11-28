import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import { getProductList } from "../../services/api";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

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
        <ProductsContainer $loading={productList.length < 1}>
          {productList.length > 0 ? (
            productList.map((p) => (
              <ProductCard
                key={p._id}
                displayAlert={displayAlert}
                product={p}
              />
            ))
          ) : (
            <>
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </>
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

  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const ProductsContainer = styled.div`
  margin: 0 auto;
  column-gap: 15px;
  row-gap: 20px;

  display: ${(props) => (props.$loading ? "flex" : "grid")};
  grid-template-columns: ${(props) =>
    props.$loading ? "1fr" : "repeat(2, 1fr)"};

  justify-content: center;

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
