import styled from "styled-components/macro";
import { Color } from "../../../../variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0px;
  width: 200px;
`;
export const Div = styled.div`
  margin: 0px;
  display: flex;
  align-items: space-between;
  background-color: ${Color.LimedSpruce};
  padding: 15px;
  width: 200px;
`;

export const Username = styled.p`
  color: ${Color.White};
  margin: 0px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
`;

export const Email = styled.a`
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.5);
`;

export const TextContainer = styled.div`
  margin: "10px";
`;

export const Image = styled.img`
  width: 50px;
  height: 50%;
  border-radius: 3px;
`;
