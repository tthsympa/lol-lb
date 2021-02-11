import React from 'react'
import type { LolFrame } from './Frame'

import Teams from './sections/Teams'
import Stats from './sections/Stats'
import Graph from './sections/Graph'
import Players from './sections/Players'

import styles from './App.module.scss'

const host = 'localhost:4000'

function App() {
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
  const [messages, setMessages] = React.useState<LolFrame | null>(null)

  const cleanInterval = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const initSocket = React.useCallback(() => {
    let socket = new WebSocket(`ws://${host}`)

    socket.onopen = () => {
      cleanInterval()
    }
    socket.onerror = error => {
      console.error('Someting bad happen, closing the connection')
      socket.close()
    }
    socket.onclose = event => {
      setMessages(null)
      reconnect()
    }
    socket.onmessage = event => {
      const data: LolFrame = JSON.parse(event.data)
      setMessages(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const reconnect = React.useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        initSocket()
      }, 3000)
    }
  }, [initSocket])

  React.useEffect(() => {
    initSocket()
    return () => {
      cleanInterval()
    }
  }, [initSocket, cleanInterval])

  if (!messages) {
    return <main className={styles.wrapper}>Loading data...</main>
  }
  return (
    <main className={styles.wrapper}>
      <Teams blueName={messages.blue.name} redName={messages.red.name} />
      <Stats
        blue={messages.blue}
        red={messages.red}
        time={messages.current_timestamp}
      />
      <Graph
        blueGold={messages.blue.gold}
        redGold={messages.red.gold}
        time={messages.current_timestamp}
      />
      <Players
        bluePlayers={messages.blue.players}
        redPlayers={messages.red.players}
      />
    </main>
  )
}

export default App
