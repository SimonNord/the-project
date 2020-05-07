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
      <div
        css={`
          flex-grow: 1;
        `}
      >
        Top part
      </div>
      <div
        css={`
          margin-bottom: 15px;
          margin-left: 10px;
          color: white;
        `}
      >
        <Button>
          <Plus />
          Add New...
        </Button>
      </div>
    </Background>
  );
};

export default SideBar;
