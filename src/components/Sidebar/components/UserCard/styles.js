import styled from "styled-components/macro";
import { Color } from "../../../../variables";
import { ReactComponent as ChevronDown } from "./assets/chevron-down.svg";

export const Background = styled.div`
  display: flex;
  background-color: ${Color.LimedSpruce};
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  margin: 0px 10px;
`;

export const LeftContent = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Username = styled.p`
  color: ${Color.White};
  margin: 0px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 3px;
`;

export const NoDecorLink = styled.span`
  display: inline-block;
  color: ${Color.CodGray};
  text-decoration: none;
`;

export const ArrowDown = styled(ChevronDown)`
  margin: 0 10px 0 15px;
  fill: ${Color.White};
`;
