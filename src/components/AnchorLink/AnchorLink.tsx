import React, { ReactNode } from "react";
import "styled-components/macro";
import { Link } from "react-router-dom";
import { Color, RoutePath } from "variables";
import FormattedText from "components/FormattedText/FormattedText";
import Spacer from "components/Spacer/Spacer";

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
        text-decoration: none;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
          &:hover {
            background-color: ${Color.DodgerBlue};
            ${FormattedText} {
              color: ${Color.White};
            }
          }
        `}
        role="menuitem"
      >
        <Spacer top={1} bottom={1} left={2}>
          <FormattedText size="0" weight="regular" color={linkColor}>
            {children}
          </FormattedText>
        </Spacer>
      </div>
    </Link>
  );
};

AnchorLink.defaultProps = {
  linkColor: Color.Black,
};

export default AnchorLink;
