import React from 'react'
import styled from '@emotion/styled'
import { Animated } from 'react-animated-css'

import PlayerContainer from './PlayerContainer'
import Dealer from './Dealer'
import Table from './Table'
import Footer from './Footer'

const GameScreen = ({ guiState, myName, emitAction }) => {
    console.log(guiState, myName)
    let myState = guiState.playerStates.find(x => x.name === myName)
    if (myState) myState.cardsUp = true

    return (
        <Animated animationIn='zoomIn' animationInDuration={550} isVisible={true}>
            <GameContainer>
                <PlayerRow>
                    {/* Empty div for spacing */}
                    <div></div>

                    <PlayerContainer
                        id='player-container-0'
                        playerState={guiState.playerStates[0] ? guiState.playerStates[0] : null} />
                    <PlayerContainer
                        id='player-container-1'
                        playerState={guiState.playerStates[1] ? guiState.playerStates[1] : null} />
                    <PlayerContainer
                        id='player-container-2'
                        playerState={guiState.playerStates[2] ? guiState.playerStates[2] : null} />
                    <PlayerContainer
                        id='player-container-3'
                        playerState={guiState.playerStates[3] ? guiState.playerStates[3] : null} />

                    {/* Empty div for spacing */}
                    <div></div>
                </PlayerRow>
                <DealerTableRow>
                    <Dealer message={guiState.message} />
                    <Table
                        window={guiState.window}
                        bets={guiState.playerStates.map(x => x.bet)}
                        isTurn={guiState.playerStates.map(x => x.isTurn)} />

                    {/* Empty div for spacing */}
                    <div></div>
                </DealerTableRow>
                <PlayerRow>
                    {/* Empty div for spacing */}
                    <div></div>

                    <PlayerContainer
                        id='player-container-7'
                        playerState={guiState.playerStates[7] ? guiState.playerStates[7] : null} />
                    <PlayerContainer
                        id='player-container-6'
                        playerState={guiState.playerStates[6] ? guiState.playerStates[6] : null} />
                    <PlayerContainer
                        id='player-container-5'
                        playerState={guiState.playerStates[5] ? guiState.playerStates[5] : null} />
                    <PlayerContainer
                        id='player-container-4'
                        playerState={guiState.playerStates[4] ? guiState.playerStates[4] : null} />

                    {/* Empty div for spacing */}
                    <div></div>
                </PlayerRow>
                <Footer myState={myState} minBet={guiState.minBet} emitAction={emitAction} />
            </GameContainer>
        </Animated>
    )
}

const GameContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 3fr 2fr 1fr;
    height: 98.32vh;
`

const PlayerRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
    column-gap           : 5%;
`

const DealerTableRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 11fr 1fr;
`

export default GameScreen