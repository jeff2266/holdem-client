import React from 'react'
import styled from '@emotion/styled'

const PlayerStatus = ({ name, balance, blind }) => {

    return (
        <>{
            (name) ?
                <PlayerStatusDiv>
                    <div>{name}</div>
                    <div>${balance}</div>
                    <div>{(blind) ? [...blind] : null}</div>
                </PlayerStatusDiv>
                : <PlayerStatusDiv>
                    <div>--</div>
                    <div>$--</div>
                    <div></div>
                </PlayerStatusDiv>
        }</>
    )

}

const PlayerStatusDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    text-align: center;
    align-content: center;
    border: 4px solid rgba(233, 192, 154, 0.8);
    border-radius: 8px;
    background-color: rgba(50, 50, 50, .8);
    margin: 12px;
`

export default PlayerStatus