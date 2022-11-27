import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import { useEffect } from "react";

export default function QuantityButton({ quantity, setQuantity }) {
  useEffect(() => {
    if (quantity === "") return setQuantity("");
    if (quantity < 1 || isNaN(quantity)) return setQuantity(1);
    if (quantity > 99) return setQuantity(99);
  }, [quantity]);

  return (
    <>
      <QntButton>
        <AiIcons.AiFillMinusCircle onClick={() => setQuantity(quantity - 1)} />

        <Num
          value={quantity}
          min="1"
          max="99"
          maxLength={2}
          type="number"
          onClick={(e) => e.target.select()}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />

        <AiIcons.AiFillPlusCircle onClick={() => setQuantity(quantity + 1)} />
      </QntButton>
    </>
  );
}

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

  svg:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
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
