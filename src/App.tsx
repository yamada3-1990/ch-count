
import { useState } from 'react'
import { SpaceHighlighterInput } from './components/SpaceHighlighterInput'
import { StatsDisplay } from './components/StatsDisplay'
import type { CountOptions } from './utils/counter'
import './App.css'

function App() {
  const [text, setText] = useState<string>("")
  const [options, setOptions] = useState<CountOptions>({ includeNewlines: false })

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Counter</h1>
        <p className="subtitle">Real-time stats with space highlighting</p>
      </header>
      <main className="app-main">
        <section className="input-section">
          <SpaceHighlighterInput value={text} onChange={setText} />
        </section>
        <aside className="stats-section">
          <StatsDisplay text={text} options={options} setOptions={setOptions} />
        </aside>
      </main>
    </div>
  )
}

export default App
