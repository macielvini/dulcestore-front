import styled from "styled-components";

export default function Form(props) {
  return <StyledForm {...props}>{props.children}</StyledForm>;
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  margin: 50px 0 30px;

  input {
    width: 100%;

    height: 46px;

    background: #ffffff;
    border-radius: 15px;
    padding: 5px 20px;
    font-size: 16px;

    border: none;
  }

  input::placeholder {
    color: #878c8d;
  }

  button {
    width: 100%;
    max-width: 200px;
    min-width: 140px;
    height: 60px;

    color: #f0ebce;
    background: #073c47;
    border-radius: 10px;

    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
