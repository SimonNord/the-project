import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

// const Progress = styled.button`

// `;

const SideBarItem = (props: Props) => {
  return (
    <div
      css={`
        background-color: ${Color.White};
      `}
    >
      {/* <Progress /> */}
      content: {props.children}
    </div>
  );
};

export default SideBarItem;
