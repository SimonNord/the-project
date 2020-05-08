import React from "react";
import "styled-components/macro";
import { Color } from "variables";
import { User } from "types";
import styled from "styled-components/macro";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";

type Props = {
  className?: string;
  user: User;
};

const Background = styled.div`
  background-color: ${Color.Cinder};
  display: flex;
  flex-flow: column nowrap;
`;

const Plus = styled(plus)`
  fill: ${Color.White};
  margin-right: 5px;
`;

const SideBar = (props: Props) => {
  return (
    <Background className={props.className}>
      <div>Top part</div>
      <div
        css={`
          margin: auto auto 15px 10px;
        `}
      >
        <Button>
          <Plus />
          <span css={{ color: Color.White }}>Add New...</span>
        </Button>
      </div>
    </Background>
  );
};

export default SideBar;
