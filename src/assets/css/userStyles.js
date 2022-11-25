const { createGlobalStyle } = require("styled-components");

const UserStyles = createGlobalStyle`
  :root {
    font-family: 'Montserrat', sans-serif;
  }

  *{
    box-sizing: border-box;
  }

  body {
    padding-top: 50px;
  }

  button {
    all: unset;
    cursor: pointer; 
  }

  button:focus {
    outline: none;
  }

  button:active {
    outline: none;
    filter: brightness(0.9);
  }

  button:hover {
      filter: brightness(1.3);
    }

  input {
    font-family: 'Montserrat', sans-serif;
  }

  input:focus {
    outline: 3px solid #073C47;
  }

  input::placeholder{
    color: #878C8D;
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
