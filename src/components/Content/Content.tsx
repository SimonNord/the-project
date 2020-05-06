import React from "react";
import styled from "styled-components/macro";
import NoContentPlaceholder from "./components/NoContentPlaceholder/NoContentPlaceholder";

type Props = {
  className?: string;
};

const FullHeightAndWidth = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Content = (props: Props) => {
  return (
    <FullHeightAndWidth className={props.className}>
      <NoContentPlaceholder />
    </FullHeightAndWidth>
  );
};

export default Content;
