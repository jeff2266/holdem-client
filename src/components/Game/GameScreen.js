import React from 'react'
import styled from '@emotion/styled'
import { Animated } from 'react-animated-css'

import PlayerContainer from './PlayerContainer'
import Dealer from './Dealer'
import Table from './Table'
import Footer from './Footer'

const GameScreen = () => {

    return (
        <Animated animationIn='zoomIn' animationInDuration={550} isVisible={true}>
            <GameContainer>
                <PlayerRow>
                    {/* Empty div for spacing */}
                    <div></div>

                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'D',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                }
                            ],
                            cardsUp: false
                        }} />
                    <PlayerContainer />
                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: false
                        }} />
                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'B',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: false
                        }} />

                    {/* Empty div for spacing */}
                    <div></div>
                </PlayerRow>
                <DealerTableRow>
                    <Dealer message="Welcome to Texas Hold'em!" />
                    <Table
                        window={[
                            { suit: '♠', value: '2' },
                            { suit: '♠', value: '7' },
                            { suit: '♥', value: 'K' },
                            { suit: '♥', value: 'Q' },
                            { suit: '♣', value: '5' }
                        ]}
                        bets={[0, 0, 0, 0]} />
                    {/* Empty div for spacing */}
                    <div></div>
                </DealerTableRow>
                <PlayerRow>
                    {/* Empty div for spacing */}
                    <div></div>

                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'D',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: false
                        }} />
                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'D',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: false
                        }} />
                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'D',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: false
                        }} />
                    <PlayerContainer
                        playerState={{
                            name: 'Player',
                            balance: 200,
                            blind: 'D',
                            pocket: [
                                {
                                    suit: '♠',
                                    value: 'J'
                                },
                                {
                                    suit: '♠',
                                    value: 'K'
                                }
                            ],
                            cardsUp: true
                        }} />

                    {/* Empty div for spacing */}
                    <div></div>
                </PlayerRow>
                <Footer />
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