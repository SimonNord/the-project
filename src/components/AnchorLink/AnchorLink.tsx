import React, { ReactNode } from "react";
import "styled-components/macro";
import { Link } from "react-router-dom";
import { Color, RoutePath } from "variables";

type Props = {
  to: RoutePath;
  linkColor?: Color.White | Color.Black;
  children: ReactNode;
};

export const AnchorLink = ({ to, linkColor, children }: Props) => {
  return (
    <Link
      to={to}
      css={`
        display: flex;
        align-items: center;
        font-size: 15px;
        color: ${linkColor};
        padding: 12px 15px;
        text-decoration: none;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

        &:hover {
          color: ${Color.White};
          background-color: ${Color.DodgerBlue};
        }

        & svg {
          display: flex;
          align-items: vertical;
          color: ${Color.GreySeeThru};
          margin-right: 8px;
          transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }

        &:hover svg {
          color: ${Color.White};
        }
      `}
      role="menuitem"
    >
      {children}
    </Link>
  );
};

AnchorLink.defaultProps = {
  linkColor: Color.Black,
};

export default AnchorLink;

/*        // &:hover ${Kid} {
        //   display: none;
        // } */
