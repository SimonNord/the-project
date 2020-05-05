import React from "react";

import { Color } from "variables";
import no_content_placeholder_image from "./images/no_content_placeholder_image.png";

const NoContentPlaceholder = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as React.CSSProperties;

  const titleStyle = {
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: "29px",
    color: "rgba(18, 18, 18)",
  };

  const subtitleStyle = {
    fontSize: "17px",
    fontWeight: 400,
    lineHeight: "24px",
    color: Color.CodGray,
  };

  const imageStyle = {
    width: 250,
  };

  return (
    <div style={containerStyle}>
      <img
        style={imageStyle}
        src={no_content_placeholder_image}
        alt="No content placeholder image"
      />
      <p style={titleStyle}>The Start of a Better You!</p>
      <p style={subtitleStyle}>
        Habits are like dominos. As one is formed, all others will follow!
      </p>
    </div>
  );
};

export default NoContentPlaceholder;
