import React from "react";
import NoContentPlaceholder from "./components/NoContentPlaceholder/NoContentPlaceholder";

type Props = {
  className?: string;
};

const Content = (props: Props) => {
  return (
    <div className={props.className}>
      <NoContentPlaceholder />
    </div>
  );
};

export default Content;
