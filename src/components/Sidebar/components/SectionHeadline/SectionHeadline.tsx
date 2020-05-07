import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const StyledSectionHeadline = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  color: ${Color.GreySeeThru};
  letter-spacing: 0;
  padding: 11px 15px;
`;

const SectionHeadline = ({ children }: Props) => {
  return <StyledSectionHeadline>{children}</StyledSectionHeadline>;
};

export default SectionHeadline;
