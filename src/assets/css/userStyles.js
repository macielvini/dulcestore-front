const { createGlobalStyle } = require("styled-components");

const UserStyles = createGlobalStyle`
  :root {
    font-family: 'Montserrat', sans-serif;
  }

  *{
    box-sizing: border-box;
  }
`;

export default UserStyles;
