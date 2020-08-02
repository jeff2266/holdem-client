import React from 'react'
import styled from '@emotion/styled'

const PlayerContainer = () => {

    return (
        <PlayerContainerDiv>
            <HandDiv>
                <img src="images/card_back.png" />
                <img src="images/card_back.png" />
            </HandDiv>
            {
                // Player exists?
                <PlayerStatusDiv>
                    <div>Player</div>
                    <div>$200</div>
                    <div>D</div>
                </PlayerStatusDiv>
            }
        </PlayerContainerDiv>
    )

}

const PlayerContainerDiv = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    column-gap: 5%;
`
const HandDiv = styled.div`    
    display        : flex;
    align-items    : center;
    justify-content: space-evenly;
    img {
        margin: 4px;
    }
`

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

export default PlayerContainer