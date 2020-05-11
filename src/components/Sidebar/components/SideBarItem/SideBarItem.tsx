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
        color: white;
        display: table-cell;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        line-height: 21px;
        height: 25px;
        width: 200px;
        padding: 11px 15px;
        vertical-align: middle;

        &:hover {
          background-color: ${Color.DodgerBlue};
        `}
    >
      {props.children}
    </div>
  );
};

export default SideBarItem;
