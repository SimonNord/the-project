import React, { ReactNode } from "react";
import "styled-components/macro";

type Props = {
  children: ReactNode;
};

const SectionHeadline = ({ children }: Props) => {
  return (
    <div
      css={`
        // Give me some styles!
      `}
    >
      passed via prop: {children}
    </div>
  );
};

export default SectionHeadline;
