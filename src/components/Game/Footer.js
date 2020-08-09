import React from 'react'
import styled from '@emotion/styled'

import ActionForm from './ActionForm'

const Footer = () => {

    return (
        <PlayerContainerDiv>
            <button onClick={(e) => {
                e.preventDefault()
            }}>◀&nbsp;&nbsp;&nbsp;Leave Room</button>
            <ActionForm isTurn={true} toCall={100} minBet={10} balance={150} />
        </PlayerContainerDiv>
    )

}

const PlayerContainerDiv = styled.div`
    display: flex;
    margin: 12px 0px 0px 0px;
    padding: 12px;
    align-items: flex-end;
    justify-content: space-between;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
    button {
        font-size: medium;
        font-weight: 600;
        padding: 8px;
        border-style: double;
        border-radius: 4px;
        border-color: rgba(233, 192, 154, 0.4);
        background-color: #2d492e;
        color: #d3c9b0;
        &:hover {
            background-color: #1d391e;
        }
        &:disabled {
            background-color: #49654a
        }
    }
`

export default Footer