import styled from "styled-components";
import { BsList, BsSearch, BsCart2, BsCheckCircleFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ showCartMessage }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Header>
        <Nav sidebar={sidebar}>
          <li onClick={showSidebar} className="menu-icon">
            <Link to="#">
              <BsList className="icon toggle-side" />
            </Link>
          </li>
          <SearchBar>
            <BsSearch className="icon" />
            <input type="text" placeholder="Pesquisar" />
          </SearchBar>
          <li className="cart-icon">
            <CartMessage showCartMessage={showCartMessage}>
              <BsCheckCircleFill />
              <p>Produto adicionado ao carrinho</p>
            </CartMessage>
            <Link to="/cart">
              <BsCart2 className="icon" />
            </Link>
          </li>
        </Nav>
      </Header>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  display: flex;
  justify-content: center;

  background: #fff;
  box-shadow: 0px 5px 35px 11px rgba(0, 0, 0, 0.1);

  padding: 0 15px;
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 570px;
  height: 60px;

  display: flex;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  justify-items: center;

  .icon {
    font-size: 24px;
  }

  .menu-icon {
    justify-self: start;
    opacity: ${(props) => (props.sidebar ? "0" : "1")};
    transition: all 400ms ease;
  }

  .cart-icon {
    justify-self: end;

    position: relative;
  }

  a {
    text-decoration: none;
  }
`;

const SearchBar = styled.li`
  justify-self: stretch;
  display: flex;
  align-items: center;

  .icon {
    font-size: 12px;
  }

  input {
    width: 100%;
    max-width: 500px;

    outline: none;
    border: none;
    padding-left: 10px;

    font-size: 14px;
  }

  input:focus {
    outline: none;
  }

  border: 1px solid black;
  padding: 2px 5px;
  border-radius: 15px;
`;

const CartMessage = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px 0 10px 10px;

  color: #fff;
  font-size: 12px;
  gap: 5px;

  position: absolute;
  top: 30px;
  right: 5px;

  width: 230px;
  background: green;

  transition: all 500ms ease;
  visibility: ${(props) => (props.showCartMessage ? "visible" : "hidden")};
  opacity: ${(props) => (props.showCartMessage ? "0.8" : "0")};
`;
