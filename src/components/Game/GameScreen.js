import React from 'react'
import styled from '@emotion/styled'

import PlayerContainer from './PlayerContainer'
import Dealer from './Dealer'
import Table from './Table'
import Footer from './Footer'

const GameScreen = () => {

    return (
        <GameContainer>
            <PlayerRow>
                {/* Empty div for spacing */}
                <div></div>

                <PlayerContainer />
                <PlayerContainer />
                <PlayerContainer />
                <PlayerContainer />

                {/* Empty div for spacing */}
                <div></div>
            </PlayerRow>
            <DealerTableRow>
                <Dealer />
                <Table />
                {/* Empty div for spacing */}
                <div></div>
            </DealerTableRow>
            <PlayerRow>
                {/* Empty div for spacing */}
                <div></div>

                <PlayerContainer />
                <PlayerContainer />
                <PlayerContainer />
                <PlayerContainer />

                {/* Empty div for spacing */}
                <div></div>
            </PlayerRow>
            <Footer />
        </GameContainer>
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