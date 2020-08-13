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
let hasJoined = false
let myName = null

function App() {

  const ENDPOINT = 'localhost:3001'

  // Init state variables
  const [players, setPlayers] = useState([])
  const [isFirstPlayer, setIsFirstPlayer] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  const [guiState, setGuiState] = useState({
    message: "Welcome to Texas Hold'em!",
    window: [],
    minBet: null,
    playerStates: []
  })

  const emitJoin = (name, password) => {
    socket.emit('c_join', { name, password })
  }

  const emitPlay = () => {
    socket.emit('c_play', players)
  }

  const emitAction = (amount) => {
    socket.emit('c_action', amount)
  }

  useEffect(() => {
    socket = socketIOClient(ENDPOINT)

    socket.on('s_players', (newPlayers) => {
      console.log(`Received players update: ${newPlayers}`)
      setPlayers(newPlayers.slice(0, 8))
    })

    socket.on('s_join_success', (isFirst, name) => {
      console.log('Successfully joined room...')
      if (isFirst) {
        setIsFirstPlayer(true)
        console.log('You are the first player...')
      }
      hasJoined = true
      myName = name
    })

    socket.on('s_play', () => {
      setIsPlay(true)
    })

    socket.on('s_gui_state', (newGuiState) => {
      setGuiState(newGuiState)
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
          : <GameScreen guiState={guiState} myName={myName} emitAction={emitAction} />
      }
    </div>
  );
}

export default App;
