const { createGlobalStyle } = require("styled-components");

const UserStyles = createGlobalStyle`
  :root {
    font-family: 'Montserrat', sans-serif;
  }

  *{
    box-sizing: border-box;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  button:focus {
    outline: orange 5px auto;
  }
`;

export default UserStyles;
