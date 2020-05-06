import React, { ReactNode } from "react";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const SectionHeadline = ({ children }: Props) => {
  return (
    <div
      style={{
        fontWeight: 500,
        // textTransform: 'uppercase',
        fontSize: "13px",
        color: Color.GreySeeThru,
        letterSpacing: 0,
        padding: "11px 15px",
      }}
    >
      {children}
    </div>
  );
};

export default SectionHeadline;
