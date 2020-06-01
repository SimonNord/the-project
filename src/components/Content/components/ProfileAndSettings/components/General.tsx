import React from "react";
import styled from "styled-components/macro";
import Spacer from "components/Spacer/Spacer";

const Gen = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid #e5eafa;
`;

const General = () => {
  return (
    <Gen>
      <Spacer top={3} right={3} bottom={3} left={3}>
        General Settings
      </Spacer>
    </Gen>
  );
};

export default General;
