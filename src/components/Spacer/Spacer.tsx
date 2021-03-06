import React, { ReactNode } from "react";
import "styled-components/macro";

type Props = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  children?: ReactNode;
};

const Spacer = ({
  children,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
}: Props) => {
  const paddingTop = top * 8;
  const paddingRight = right * 8;
  const paddingBottom = bottom * 8;
  const paddingLeft = left * 8;

  return (
    <div
      css={{
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Spacer;