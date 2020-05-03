import React from 'react'
import "styled-components/macro"
import { Color } from '../../variables'

type Props = {
  className?: string,
}

const SideBar = (props: Props) => {
    return (
        <div className={props.className} css={`background-color: ${Color.Cinder};`}>
          This will be the sidebar
        </div>
    )
}

export default SideBar;