import React from 'react'
import styled from '@emotion/styled'

const Table = () => {

    return (
        <TableContainer>
            <TopBottomBets>
                <Bet>
                    <div>$</div>
                    <div>--</div>
                </Bet>
                <Bet>
                    <div>$</div>
                    <div>--</div>
                </Bet>
            </TopBottomBets>

            <BetsAndWindowContainer>

                {/* Empty div for spacing */}
                <div></div>

                <LeftRightBets>
                    <Bet>
                        <div>$</div>
                        <div>--</div>
                    </Bet>
                    <Bet>
                        <div>$</div>
                        <div>--</div>
                    </Bet>
                </LeftRightBets>
                <Window>
                    <img src="images/card_back.png" />
                    <img src="images/card_back.png" />
                    <img src="images/card_back.png" />
                    <img src="images/card_back.png" />
                    <img src="images/card_back.png" />
                </Window>
                <LeftRightBets>
                    <Bet>
                        <div>$</div>
                        <div>--</div>
                    </Bet>
                    <Bet>
                        <div>$</div>
                        <div>--</div>
                    </Bet>
                </LeftRightBets>

                {/* Empty div for spacing */}
                <div></div>
            </BetsAndWindowContainer>

            <TopBottomBets>
                <Bet>
                    <div>$</div>
                    <div>--</div>
                </Bet>
                <Bet>
                    <div>$</div>
                    <div>--</div>
                </Bet>
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
    display       : flex;
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
const Window = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin: 2px;
    }
`

export default Table