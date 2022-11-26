import styled from "styled-components";
import { BsList, BsSearch, BsCart2 } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Header>
        <Nav sidebar={sidebar}>
          <li onClick={showSidebar}>
            <Link to="#">
              <BsList className="icon toggle-side" />
            </Link>
          </li>
          <SearchBar>
            <BsSearch className="icon" />
            <input type="text" placeholder="Pesquisar" />
          </SearchBar>
          <li>
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
  justify-content: space-between;
  align-items: center;

  .icon {
    font-size: 24px;
  }

  .toggle-side {
    opacity: ${(props) => (props.sidebar ? "0" : "1")};
    transition: all 400ms ease;
  }

  a {
    text-decoration: none;
  }
`;

const SearchBar = styled.li`
  display: flex;
  align-items: center;

  .icon {
    font-size: 12px;
  }

  max-width: 300px;
  margin: 0 15px;

  input {
    width: 100%;

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
