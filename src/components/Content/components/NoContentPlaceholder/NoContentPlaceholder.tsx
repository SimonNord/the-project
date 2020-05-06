import React from "react";
import styled from "styled-components/macro";

import { Color } from "variables";
import no_content_placeholder_image from "./assets/no_content_placeholder_image.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Image = styled.img`
  width: 250px;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px;
  color: rgb(18, 18, 18);
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: ${Color.CodGray};
`;

const NoContentPlaceholder = () => {
  return (
    <Container>
      <Image
        src={no_content_placeholder_image}
        alt="No content placeholder image"
      />
      <Title>The Start of a Better You!</Title>
      <Subtitle>
        Habits are like dominos. As one is formed, all others will follow!
      </Subtitle>
    </Container>
  );
};

export default NoContentPlaceholder;
