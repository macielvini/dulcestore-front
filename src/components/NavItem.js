import styled from "styled-components";

export default function NavItem(props) {
  const { selected } = props;

  return (
    <StyledItem {...props} selected={selected}>
      {props.children}
    </StyledItem>
  );
}

const StyledItem = styled.li`
  display: flex;
  align-items: center;

  .material-symbols-rounded {
    font-variation-settings: "FILL" 0;
    /* 'wght' 400, */
    /* 'GRAD' 0, */
    /* 'opsz' 48 */
  }
`;
