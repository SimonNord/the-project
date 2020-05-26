import React, { ReactNode } from "react";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Color, RoutePath } from "variables";

type Props = {
  url: RoutePath;
  children: ReactNode;
  linkColor?: Color.White | Color.Black;
};

// Extend the <Link> component with customised styles
// color is passed by prop
const StyledLink = styled(Link).attrs({
  role: "menuitem",
})`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: ${Color.White};
    background-color: ${Color.DodgerBlue};
  }
`;

export const AnchorLink = ({ url, children, linkColor }: Props) => {
  return (
    <StyledLink to={url} style={{ color: linkColor }}>
      {children}
    </StyledLink>
  );
};

AnchorLink.defaultProps = {
  linkColor: Color.Black,
};

export default AnchorLink;
