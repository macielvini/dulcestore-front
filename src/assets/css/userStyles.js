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

  input {
    font-family: 'Montserrat', sans-serif;
  }

  input:focus {
    outline: 3px solid #073C47;
  }

  a {
    text-decoration: none;
    color: black;
  }

  strong {
    font-weight: bold;
  }
`;

export default UserStyles;
