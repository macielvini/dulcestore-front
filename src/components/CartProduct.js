import { useEffect, useState } from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import { getCart } from "../services/api";

export default function CartProduct({props}) {
  const [num, setNum] = useState(1);



  function deleteItem() {
    Swal.fire({
      html: "<p style='font-size:16px'>Remover ITEM TEXTO GRANDE do carrinho?</p>",
      width: "fit-content",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Sim, remover",
      cancelButtonText: "Cancelar",
    });
  }

  useEffect(() => {
    if (num === "") return setNum("");
    if (num < 1 || isNaN(num)) return setNum(1);
    if (num > 99) return setNum(99);
  }, [num]);

  return (
    <Container>
      <div>
        <ImgContainer>
          <img
            src={props.image}
            alt={props.description}
          />
        </ImgContainer>

        <aside>
          <Nome>{props.name}</Nome>
          <Preco>R$ {props.value}</Preco>
        </aside>
      </div>

      <Actions>
        <QntButton>
          <AiIcons.AiFillMinusCircle onClick={() => setNum(num - 1)} />

          <Num
            value={num}
            min="1"
            max="99"
            maxLength={2}
            type="number"
            onClick={(e) => e.target.select()}
            onChange={(e) => setNum(parseInt(e.target.value))}
          />

          <AiIcons.AiFillPlusCircle onClick={() => setNum(num + 1)} />
        </QntButton>
      </Actions>
      <HiOutlineTrash className="trash" onClick={deleteItem} />
    </Container>
  );
}

const Container = styled.div`
  @media (max-width: 300px) {
    padding-bottom: calc(10px + 10px + 5px);
  }

  & > div {
    display: flex;
    gap: 10px;
  }

  width: 100%;
  border-radius: 10px;
  background-color: #3e6063;

  padding: 10px;

  aside {
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  position: relative;
  z-index: 0;

  .trash {
    font-size: 20px;
    color: #fff;

    position: absolute;
    top: -5px;
    right: -5px;

    border-radius: 15px;
    background: red;
    padding: 3px;
  }

  svg:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 5px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 70%;
  }
`;

const Nome = styled.p`
  color: #ffffff;
`;

const Preco = styled.p`
  font-weight: 600;
  color: #ffefd6;
`;

const QntButton = styled.div`
  height: 24px;
  width: 66px;
  border-radius: 15px;
  padding: 2px;
  background-color: #022329;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 50px;
`;

const Num = styled.input`
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  width: 25px;
  background: none;
  border: none;
  outline: none;

  &:focus {
    background: none;
    border: none;
    outline: none;
  }

  color: #fff;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Actions = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  color: #fff;

  font-size: 20px;

  @media (max-width: 300px) {
    left: 10px;
    bottom: 0;
  }
`;
