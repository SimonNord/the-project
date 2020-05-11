import React from "react";

type Props = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const Spacer = ({ top, right, bottom, left }: Props) => {
  top *= 8;
  right *= 8;
  bottom *= 8;
  left *= 8;

  return (
    <div style={{ padding: `${top}px ${right}px ${bottom}px ${left}px` }}></div>
  );
};

Spacer.defaultProps = {
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
};

export default Spacer;
