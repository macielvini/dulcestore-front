import styled from "styled-components";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <>
      <Nav>
        <ul>
          <NavItem>
            <Link to={"/"}>
              <span className="material-symbols-rounded">home</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/cart"}>
              <span className="material-symbols-rounded">shopping_cart</span>
            </Link>
          </NavItem>
          <NavItem>
            <span class="material-symbols-rounded">notifications</span>
          </NavItem>
          <NavItem>
            <span class="material-symbols-rounded">person</span>
          </NavItem>
        </ul>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  padding: 0 25px;

  width: 100vw;
  height: 85px;

  display: flex;
  align-items: center;

  box-shadow: 0px -5px 35px -11px rgba(0, 0, 0, 0.1);

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;
