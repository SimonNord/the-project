import React, { ReactNode } from "react";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Color, RoutePath } from "variables";

type Props = {
  url: RoutePath;
  linkColor?: Color.White | Color.Black;
  children: ReactNode;
};

export const AnchorLink = ({ url, linkColor, children }: Props) => {
  return (
    <Link
      to={url}
      css={`
        display: flex;
        align-items: center;
        color: ${linkColor};
        padding: 12px 15px;
        text-decoration: none;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

        &:hover {
          color: ${Color.White};
          background-color: ${Color.DodgerBlue};
        }
      `}
    >
      {children}
    </Link>
  );
};

AnchorLink.defaultProps = {
  linkColor: Color.Black,
};

export default AnchorLink;
