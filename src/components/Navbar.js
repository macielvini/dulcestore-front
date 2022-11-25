import styled from "styled-components";
import { BsList, BsSearch, BsCart2 } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header>
        <Nav>
          <li onClick={showSidebar}>
            <Link to="#">
              <BsList className="icon" />
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
      </header>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
}

const Nav = styled.ul`
  position: fixed;
  top: 0;
  left: 0;

  padding: 0 15px;

  width: 100vw;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 5px 35px 11px rgba(0, 0, 0, 0.1);

  background: #fff;

  .icon {
    font-size: 24px;
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

  input {
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
