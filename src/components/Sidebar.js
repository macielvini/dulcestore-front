import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

export default function Sidebar({ showSidebar, sidebar, sidebarRef }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      <Nav sidebar={sidebar} onClick={showSidebar}>
        <ListMenu>
          <BsIcons.BsXCircle className="navbar-toggle" onClick={showSidebar} />

          <ul>
            {SidebarData.map((item) => (
              <ListItem
                needSignin={item.needAccount}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                <span>{item.name}</span>
              </ListItem>
            ))}
          </ul>
          <SignOut>
            <BsIcons.BsBoxArrowLeft />
            <button>Sair da conta</button>
          </SignOut>
        </ListMenu>
      </Nav>
    </>
  );
}

// const StyledSidebar = styled.div`
//   width: 80vw;
//   height: 100vh;

//   background: #fff;

//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 2;

//   display: ${(props) => (props.showSidebar ? "initial" : "none")};

//   transition: all 400ms ease;
// `;

// const SidebarBg = styled.div`
//   width: 100vw;
//   height: 100vh;

//   background: red;
//   opacity: 0.5;

//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 1;

//   display: ${(props) => (props.showSidebar ? "initial" : "none")};
// `;

const Nav = styled.nav`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  z-index: 2;

  transition: all 300ms ease;

  .navbar-toggle {
    font-size: 24px;

    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ListMenu = styled.div`
  position: relative;
  width: 250px;
  height: 100vh;
  background-color: #fff;

  padding: 40px 25px 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px;
  border-radius: 10px;

  display: ${(props) => (props.needSignin ? "none" : "flex")};

  &:hover {
    cursor: pointer;
    background-color: #dadada;
  }

  &:active {
    background-color: #dadada;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SignOut = styled.div`
  background-color: red;
  color: #fff;
  text-align: center;

  width: 160px;
  padding: 10px;

  border-radius: 10px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  gap: 10px;
`;
