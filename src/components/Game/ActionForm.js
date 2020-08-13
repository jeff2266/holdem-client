import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import useAudio from '../useAudio'

const ActionForm = ({ isTurn, toCall, minBet, balance, emitAction }) => {

    const [raiseAmount, setRaiseAmount] = useState(Math.min(toCall, balance))
    const [play] = useAudio('sounds/click.wav')

    useEffect(() => {
        setRaiseAmount(toCall)
    }, [toCall])

    return (
        <ActionFormContainer>
            <h3>$</h3>
            <RaiseSelect>
                <RaiseAmount id='raise-amount'>{raiseAmount}</RaiseAmount>
                <RaiseUpDown>
                    <button id='raise-up-button' disabled={!isTurn || raiseAmount === balance} onClick={(e) => {
                        e.preventDefault()
                        play()
                        if (raiseAmount === balance) return
                        setRaiseAmount(Math.min(raiseAmount + minBet, balance))
                    }}>▲</button>
                    <button id='raise-down-button' disabled={!isTurn || raiseAmount <= toCall} onClick={(e) => {
                        e.preventDefault()
                        play()
                        if (raiseAmount === balance) {
                            if (balance <= toCall) return
                            if ((raiseAmount - toCall) % minBet !== 0) {
                                setRaiseAmount(raiseAmount - (raiseAmount % minBet))
                                return
                            }
                        }
                        setRaiseAmount(Math.max(toCall, raiseAmount - minBet))
                    }}>▼</button>
                </RaiseUpDown>
            </RaiseSelect>
            <ActionButton id='call-button' disabled={!isTurn} onClick={(e) => {
                e.preventDefault()
                emitAction(raiseAmount)
            }}>{
                    (raiseAmount === balance) ? <>All In</>
                        : (raiseAmount === toCall) ?
                            (toCall === 0) ? <>Check</>
                                : <>Call</>
                            : <>Raise</>
                }</ActionButton>
            <ActionButton id='fold-button' disabled={!isTurn} onClick={(e) => {
                e.preventDefault()
            }}>Fold</ActionButton>
        </ActionFormContainer>
    )

}

const ActionFormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 2fr;
    grid-column-gap: 8px;
    align-items: flex-end;
    justify-content: space-between;
    h3 {
        margin: 8px;
        text-align: center;
    }
`

const RaiseSelect = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
`

const RaiseAmount = styled.div`
    align-self: flex-end;
    font-size: 1.5em;
    text-align: right;
    width: 5em;
    margin-right: 16px;
    padding: 6px;
    background: rgba(6, 35, 18, 0.6);
    border-radius: 8px;
`

const RaiseUpDown = styled.div`
    display: flex;
    flex-direction: column;
    button {
        margin: 1px;
        &:hover {
            background-color: #1d391e;
        }
        &:disabled {
            background-color: #49654a
        }
    }
`

const ActionButton = styled.button`
    margin: 1px;
    align-self: stretch;
    button {
        &:hover {
            background-color: #1d391e;
        }
        &:disabled {
            background-color: #49654a
        }
    }
`

export default ActionForm