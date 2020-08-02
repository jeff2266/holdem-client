import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css'
import LoginScreen from './components/Lobby/LoginScreen'
import GameScreen from './components/Game/GameScreen'

let socket

// React only re renders of state variables, i.e. React will not re render if these variables
// change value. But, that's okay because these variables only ever update right before the players
// state variable changes. So, these variables will update, then players will update, triggering a
// re render with all three variables updated.
let isFirstPlayer = false
let hasJoined = false

function App() {

  const ENDPOINT = 'localhost:3001'

  // Init state variables
  const [players, setPlayers] = useState([])
  const [isPlay, setIsPlay] = useState(true)

  const emitJoin = (name, password) => {
    socket.emit('c_join', { name, password })
  }

  const emitPlay = () => {
    socket.emit('c_play', players)
  }

  useEffect(() => {
    socket = socketIOClient(ENDPOINT)

    socket.on('s_players', (newPlayers) => {
      console.log(`Received players update: ${newPlayers}`)
      setPlayers(newPlayers.slice(0, 8))
    })

    socket.on('s_join_success', (isFirst) => {
      console.log('Successfully joined room...')
      if (isFirst) {
        isFirstPlayer = true
        console.log('You are the first player...')
      }
      hasJoined = true
    })

    socket.on('s_play', () => {
      setIsPlay(true)
    })

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      {
        !isPlay ?
          < LoginScreen
            players={players}
            hasJoined={hasJoined}
            isFirstPlayer={isFirstPlayer}
            socketHandle={{ emitJoin, emitPlay }} />
          : <GameScreen />
      }
    </div>
  );
}

export default App;
