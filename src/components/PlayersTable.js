import React from 'react';
import styled from '@emotion/styled'

const PlayersTable = ({ players }) => {

    let paddedPlayers = [...players]
    for (let i = players.length; i < 8; i++) {
        paddedPlayers.push('')
    }

    return (
        <Table>
            <tbody>
                <tr><th>#</th><th>Player Name</th></tr>
                {
                    paddedPlayers.map((a, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td><td>{a}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    border: 2px solid rgba(233, 192, 154, 0.4);
    border-radius: 4px;
    background: #333;
    padding: 4px;
    text-align: left;
    tbody {
        tr:nth-of-type(even) {
            background-color: #282828;
        }
    }
`

export default PlayersTable