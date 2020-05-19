import React, { ReactNode } from "react";
import "styled-components/macro";

type Props = {
  children: ReactNode;
};

const Menu = ({ children }: Props) => {
  return (
    <nav role="navigation">
      <ul>{children}</ul>
    </nav>
  );
};

export default Menu;
