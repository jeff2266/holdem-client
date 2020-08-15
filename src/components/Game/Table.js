import React from 'react'
import styled from '@emotion/styled'

import Card from './Card'

const Table = ({ window, bets, isTurn }) => {

    return (
        <TableContainer>
            <TopBottomBets>
                {
                    (isTurn[1]) ?
                        <BetTurn id='player-bet-1'><div>$</div> {
                            (bets[1] === undefined) ? <div>--</div> : <div>{bets[1]}</div>
                        } </BetTurn>
                        : <Bet id='player-bet-1'><div>$</div> {
                            (bets[1] === undefined) ? <div>--</div> : <div>{bets[1]}</div>
                        } </Bet>
                }
                {
                    (isTurn[2]) ?
                        <BetTurn id='player-bet-2'><div>$</div> {
                            (bets[2] === undefined) ? <div>--</div> : <div>{bets[2]}</div>
                        } </BetTurn>
                        : <Bet id='player-bet-2'><div>$</div> {
                            (bets[2] === undefined) ? <div>--</div> : <div>{bets[2]}</div>
                        } </Bet>
                }
            </TopBottomBets>

            <BetsAndWindowContainer>

                {/* Empty div for spacing */}
                <div></div>

                <LeftRightBets>
                    {
                        (isTurn[0]) ?
                            <BetTurn id='player-bet-0'><div>$</div> {
                                (bets[0] === undefined) ? <div>--</div> : <div>{bets[0]}</div>
                            } </BetTurn>
                            : <Bet id='player-bet-0'><div>$</div> {
                                (bets[0] === undefined) ? <div>--</div> : <div>{bets[0]}</div>
                            } </Bet>
                    }
                    {
                        (isTurn[7]) ?
                            <BetTurn id='player-bet-7'><div>$</div> {
                                (bets[7] === undefined) ? <div>--</div> : <div>{bets[7]}</div>
                            } </BetTurn>
                            : <Bet id='player-bet-7'><div>$</div> {
                                (bets[7] === undefined) ? <div>--</div> : <div>{bets[7]}</div>
                            } </Bet>
                    }
                </LeftRightBets>
                <Window>
                    {
                        (window !== undefined) ?
                            window.map(v => <Card card={{ suit: v.suit, value: v.value }} isUp={true} />)
                            : <div />
                    }
                </Window>
                <LeftRightBets>
                    {
                        (isTurn[3]) ?
                            <BetTurn id='player-bet-3'><div>$</div> {
                                (bets[3] === undefined) ? <div>--</div> : <div>{bets[3]}</div>
                            } </BetTurn>
                            : <Bet id='player-bet-3'><div>$</div> {
                                (bets[3] === undefined) ? <div>--</div> : <div>{bets[3]}</div>
                            } </Bet>
                    }
                    {
                        (isTurn[4]) ?
                            <BetTurn id='player-bet-4'><div>$</div> {
                                (bets[4] === undefined) ? <div>--</div> : <div>{bets[4]}</div>
                            } </BetTurn>
                            : <Bet id='player-bet-4'><div>$</div> {
                                (bets[4] === undefined) ? <div>--</div> : <div>{bets[4]}</div>
                            } </Bet>
                    }
                </LeftRightBets>

                {/* Empty div for spacing */}
                <div></div>
            </BetsAndWindowContainer>

            <TopBottomBets>
                {
                    (isTurn[6]) ?
                        <BetTurn id='player-bet-6'><div>$</div> {
                            (bets[6] === undefined) ? <div>--</div> : <div>{bets[6]}</div>
                        } </BetTurn>
                        : <Bet id='player-bet-6'><div>$</div> {
                            (bets[6] === undefined) ? <div>--</div> : <div>{bets[6]}</div>
                        } </Bet>
                }
                {
                    (isTurn[5]) ?
                        <BetTurn id='player-bet-5'><div>$</div> {
                            (bets[5] === undefined) ? <div>--</div> : <div>{bets[5]}</div>
                        } </BetTurn>
                        : <Bet id='player-bet-5'><div>$</div> {
                            (bets[5] === undefined) ? <div>--</div> : <div>{bets[5]}</div>
                        } </Bet>
                }
            </TopBottomBets>
        </TableContainer>
    )

}

const TableContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;    
    background: url(../images/table.png) no-repeat center !important;
    background-size: contain !important;
    background-position: center;
`

const TopBottomBets = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const BetsAndWindowContainer = styled.div`
    display: grid;    
    grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
`

const LeftRightBets = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Bet = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 6px 10px;
    border: 4px solid rgba(233, 192, 154, 0.8);
    border-radius: 8px;
    background-color: rgba(50, 50, 50, .8);
    text-align: center;
`

const BetTurn = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 6px 10px;
    border: 4px solid rgba(225, 100, 50, 0.8);
    border-radius: 8px;
    background-color: rgba(50, 50, 50, .8);
    text-align: center;
`

const Window = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    img {
        margin: 2px;
    }
`

export default Table