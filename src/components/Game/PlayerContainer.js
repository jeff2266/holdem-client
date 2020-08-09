import React from 'react'
import styled from '@emotion/styled'
import { Animated } from 'react-animated-css'

import Card from './Card'
import PlayerStatus from './PlayerStatus'

const PlayerContainer = ({ playerState }) => {

    return (
        <>{
            (playerState !== undefined) ?
                <PlayerContainerDiv>
                    <HandDiv>
                        {
                            (playerState.pocket[0] !== undefined) ?
                                <Animated animationIn='fadeInLeft' animationInDuration={250} isVisible={true}>
                                    <Card
                                        card={{ suit: playerState.pocket[0].suit, value: playerState.pocket[0].value }}
                                        isUp={playerState.cardsUp} />
                                </Animated>
                                : <Animated animationOut='fadeOut' animationOutDuration={0} isVisible={false}>
                                    < Card
                                        card={{ suit: 'x', value: 'x' }}
                                        isUp={playerState.cardsUp}
                                        isVisible={false} />
                                </Animated>
                        }
                        {
                            (playerState.pocket[1] !== undefined) ?
                                <Animated animationIn='fadeInLeft' animationInDuration={250} isVisible={true}>
                                    <Card
                                        card={{ suit: playerState.pocket[1].suit, value: playerState.pocket[1].value }}
                                        isUp={playerState.cardsUp} />
                                </Animated>
                                : <Animated animationOut='fadeOut' animationOutDuration={0} isVisible={false}>
                                    < Card
                                        card={{ suit: 'x', value: 'x' }}
                                        isUp={playerState.cardsUp}
                                        isVisible={false} />
                                </Animated>
                        }
                    </HandDiv>
                    <PlayerStatus name={playerState.name} balance={playerState.balance} blind={playerState.blind} />
                </PlayerContainerDiv>
                : <PlayerContainerDiv>
                    <HandDiv />
                    <PlayerStatus />
                </PlayerContainerDiv>
        }</>
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

export default PlayerContainer