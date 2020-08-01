import React from 'react'
import styled from '@emotion/styled'





const UserPwdForm = ({ playerCt, isFirstPlayer, socketHandle: { emitJoin, emitPlay } }) => {

    return (
        <div>
            <Form onSubmit={e => {
                e.preventDefault()
            }}>
                <div>
                    <label htmlFor="username" >Username:</label>
                    <input id="username" placeholder="choose a name..."></input>
                </div>
                <div>
                    <label htmlFor="password" >Password:</label>
                    <input id="password" type="password" placeholder="enter password..." ></input>
                </div>
                <Button id="join-button" onClick={(e) => {
                    const usernameElement = document.getElementById('username')
                    const passwordElement = document.getElementById('password')
                    emitJoin(usernameElement.value, passwordElement.value)
                }}>Join</Button>
                {
                    isFirstPlayer ?
                        (playerCt > 1) ?
                            <Button onClick={(e) => {
                                emitPlay()
                            }}>Play!</Button>
                            : null
                        : null
                }
            </Form>
        </div>
    )
}

const Form = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 0px 8px;
    label {
        float: left;
    }
    input {
        float: right;
        text-align: right;
    }
    * {
        margin: 1px;
    }
`

const Button = styled.button`
    font-size: medium;
    font-weight: 600;
    border-style: double;
    border-radius: 4px;
    border-color: rgba(233, 192, 154, 0.4);
    background-color: #2d492e;
    color: #d3c9b0;
    &:hover {
        background-color: #1d391e;
    }
`

export default UserPwdForm