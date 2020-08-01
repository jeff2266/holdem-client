import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css'
import LoginScreen from './components/LoginScreen'

let socket
let isFirstPlayer = false
let hasJoined = false

function App() {

  const ENDPOINT = 'localhost:3001'

  // Init state variables
  const [players, setPlayers] = useState([])

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

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <LoginScreen
        players={players}
        hasJoined={hasJoined}
        isFirstPlayer={isFirstPlayer}
        socketHandle={{ emitJoin, emitPlay }} />
    </div>
  );
}

export default App;
