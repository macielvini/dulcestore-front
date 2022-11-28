import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { numberToFormatBrl } from "../utils/vanillaFunctions";
import { addCart } from "../services/api";
import Swal from "sweetalert2";
import { useAuth } from "../context/authContext";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { displayAlert } = props;
  const { _id, description, name, value, image } = props.product;

  const goToProductPage = () =>
    navigate(`/product/${_id}`, {
      state: { image, name, value, description },
    });

  function cartAdd() {
    if (!user.token) {
      Swal.fire({
        title: "Faça login para adicionar ao carrinho",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#d33",
        confirmButtonText: "Fazer login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in");
        }
      });

      return;
    }

    const body = {
      _id: `${_id}`,
      quantity: 1,
    };

    addCart(body)
      .then(() => {
        displayAlert();
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 422) {
          Swal.fire({
            title: "Faça login para adicionar ao carrinho",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Fazer login",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/sign-in");
            }
          });
        }
      });
  }

  return (
    <Card>
      <CardImage onClick={goToProductPage}>
        <img src={image} alt="" />
      </CardImage>

      <CardBottom>
        <div className="info">
          <ProductName>{name}</ProductName>
          <ProductPrice>{numberToFormatBrl(value)}</ProductPrice>
        </div>
        <ButtonContainer>
          <BuyButton
            onClick={() => {
              cartAdd();
              navigate("/cart");
            }}
          >
            Comprar
          </BuyButton>
          <CartButton onClick={() => cartAdd()} className="icon">
            <BsCartPlus />
          </CartButton>
        </ButtonContainer>
      </CardBottom>
    </Card>
  );
}

const Card = styled.div`
  min-width: 100px;
  width: 100%;
  max-width: 180px;
  height: 100%;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  overflow: hidden;
`;

const CardImage = styled.div`
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 70%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  height: calc(100% - 160px);

  background: #3e6063;

  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 12px;

  display: flex;
  align-items: center;

  color: #fffdfb;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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

  font-size: 16px;
`;
