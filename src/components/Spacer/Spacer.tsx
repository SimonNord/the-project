import React from "react";

type Props = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const Spacer = ({ top, right, bottom, left }: Props) => {
  const paddingTop = top * 8;
  const paddingRight = right * 8;
  const paddingBottom = bottom * 8;
  const paddingLeft = left * 8;

  return (
    <div
      style={{
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
      }}
    ></div>
  );
};

Spacer.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default Spacer;
