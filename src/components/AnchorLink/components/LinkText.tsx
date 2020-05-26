import React, { ReactNode } from "react";
import "styled-components/macro";

type Props = {
  children: ReactNode;
};

export const LinkText = ({ children }: Props) => <span>{children}</span>;

export default LinkText;
