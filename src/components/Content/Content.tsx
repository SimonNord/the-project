import React from "react";
import NoContentPlaceholder from "./components/NoContentPlaceholder/NoContentPlaceholder";

type Props = {
  className?: string;
};

const Content = (props: Props) => {
  const style = {
    width: "100%",
    height: "100%",
    margin: "auto",
  };

  return (
    <div className={props.className} style={style}>
      <NoContentPlaceholder />
    </div>
  );
};

export default Content;
