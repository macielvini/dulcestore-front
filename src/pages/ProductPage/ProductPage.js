import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import QuantityButton from "../../components/QuantityButton";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <BackButton>
          <AiIcons.AiOutlineArrowLeft onClick={() => navigate(-1)} />
        </BackButton>
        <ImageContainer>
          <img
            src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="foto do produto"
          />
        </ImageContainer>
        <ProductInfo>
          <h1>Titulo do produto</h1>
          <PriceContainer>
            <p>R$ 10000</p>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          </PriceContainer>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
          <ProductDetails>
            <p>Detalhes</p>
            <Details>
              A poltrona Nina traz muita segurança e conforto para seu ambiente.
              Sua estrutura é 100% em madeira Eucalipto e todo conforto se deve
              a espuma com densidade D-23. Com um design sofisticado, a poltrona
              Nina conta com acabamento em Suede. Após a sua compra, produto
              passará por PROCESSO DE FABRICAÇÃO. Qual o material utilizado? -
              Tecidos Suede; - Espuma D-23; - Percintas elásticas; - Estrutura
              100% madeira; - Pés madeira de eucalipto. Para quem indicamos? -
              Para os amantes da LEITURA - Para trazer conforto na hora da
              AMAMENTAÇÃO; - Para trazer sofisticação para SALA DE ESTAR - Para
              trazer aconchego em seu QUARTO - Para proporcionar comodidade ao
              seu ESCRITÓRIO ou HOME OFFICE Garantia de fábrica de 03 meses
              contra defeito de fabricação Modo de limpeza - Limpar com pano
              limpo e moderadamente úmido Observações importantes: -Todos os
              produtos vão embalados com total segurança. - Não nos
              responsabilizamos por montagens, subidas em escadas ou similares
              no ato da entrega. - Pode haver alguma diferença de tonalidade
              entre a imagem e o produto, por conta do tratamento de imagens e a
              calibração de cores da sua tela. Dimensões Altura: 87 cm Largura:
              61 cm Profundidade: 60 cm Peso: 9,5 kg Tecido Suede 100%
              poliéster. Informações de Envio. - Produto montado, sendo
              necessário apenas rosquear os pés. - Nossos produtos são embalados
              com até 02 Poltronas Nina por volume. Informamos a nossos clientes
              que devido a paralisação das rodovias em todo Brasil, muitos de
              nossos pedidos a serem enviados em breve, os que já estão a
              caminho e os próximos pedidos a serem enviados, poderão sofrer
              impacto de atrasos. Faremos nosso trabalho de envio normal e assim
              que as estradas liberarem, as mercadorias seguirão rota
              normalmente.
            </Details>
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
