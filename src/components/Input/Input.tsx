import React from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  outline: 0;
  border: 2px solid #eaeaea;
`;

const Input = () => {
  return <StyledInput />;
};

export default Input;
