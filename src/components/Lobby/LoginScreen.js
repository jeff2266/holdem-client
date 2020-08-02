import React from 'react'
import styled from '@emotion/styled'

import PlayersTable from './PlayersTable'
import UserPwdForm from './UserPwdForm'

const LoginScreen = ({ players, hasJoined, isFirstPlayer, socketHandle }) => {

    return (
        <LoginScreenDiv>
            <h1>♦ ♣ Texas Hold'em ♥ ♠</h1>
            <br />
            <PlayersTable players={players} />
            <br />
            <UserPwdForm
                playerCt={players.length}
                hasJoined={hasJoined}
                isFirstPlayer={isFirstPlayer}
                socketHandle={socketHandle} />
        </LoginScreenDiv>
    )
}

const LoginScreenDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #242424;
    padding: 32px;
    border-style: double;
    border-radius: 4px;
    border-color: rgba(233, 192, 154, 0.4);
    left: 50%;
    top: 50%;
`

export default LoginScreen