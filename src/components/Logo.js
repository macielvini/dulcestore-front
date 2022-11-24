import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Logo() {
  return (
    <Link to="/">
      <StyledLogo>Dulce</StyledLogo>
    </Link>
  );
}

const StyledLogo = styled.h1`
  font-family: "Six Caps";
  font-size: 100px;

  color: #ffefd6;

  &:hover {
    cursor: pointer;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
