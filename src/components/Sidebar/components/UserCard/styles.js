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
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 15px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 3px;
`;

export const ExpandedList = styled.div`
  margin-top: 3px;
  text-align: left;
  padding: 15px;
  background-color: white;
  border-radius: 3px;
`;

export const ExpandedListItem = styled.a`
  padding: 6px;
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  color: ${Color.CodGray};
`;

export const ArrowDown = styled(ChevronDown)`
  margin: 0 10px 0 15px;
  fill: ${Color.White};
`;