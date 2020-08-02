import React from 'react'
import styled from '@emotion/styled'

const ActionForm = () => {

    return (
        <ActionFormContainer>
            <button>Fold</button>
            <button>Check</button>
            <h3>$</h3>
            <RaiseSelect>
                <RaiseAmount>200</RaiseAmount>
                <RaiseUpDown>
                    <button>▲</button>
                    <button>▼</button>
                </RaiseUpDown>
            </RaiseSelect>
            <CallRaiseAllInButton>Call</CallRaiseAllInButton>
        </ActionFormContainer>
    )

}

const ActionFormContainer = styled.form`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 4fr 2fr;
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
    }
`

const CallRaiseAllInButton = styled.button`
    margin: 1px;
    align-self: stretch;
`

export default ActionForm