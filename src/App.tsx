import React from 'react'
import { BreakHook } from './components/BreakHook'
import { SafeHook } from './components/SafeHook'

function App(): React.ReactElement {
  return (
    <div style={{ gap: '10px' }}>
      <h2>Abra o console para ver a reação</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div className="Container">
          <h3>BreakHook</h3>
          <BreakHook />
        </div>
        <div className="Container">
          <h3>SafeHook</h3>
          <SafeHook />
        </div>
      </div>
    </div>
  )
}

export default App
