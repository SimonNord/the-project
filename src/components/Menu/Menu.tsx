import React, { ReactNode } from "react";
import "styled-components/macro";

type Props = {
  children: ReactNode;
  className?: string;
};

const Menu = ({ children, className }: Props) => {
  return (
    <nav role="navigation" className={className}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Menu;
