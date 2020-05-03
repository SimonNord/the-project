import React from "react";

type Props = {
  className?: string;
};

const Content = (props: Props) => {
  return <div className={props.className}>this is the content</div>;
};

export default Content;
