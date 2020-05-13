import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const SideBarItem = (props: Props) => {
  return (
    <div
      css={`
        background-color: ${Color.Cinder};
        color: ${Color.White};
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        line-height: 25px;
        padding: 11px 15px;
        transition: color .2s ease-in-out,background-color .2s ease-in-out;
        width: 200px;

        &:hover {
          background-color: ${Color.DodgerBlue};
        `}
    >
      {props.children}
    </div>
  );
};

export default SideBarItem;
