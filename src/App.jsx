import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <p className='text-lg'>Edit <code>App.jsx</code> and save to test HMR updates.</p>
      <p className='text-lg'>Count: {count}</p>
      <Button onClick={() => setCount((c) => c + 1)}>Increment Count</Button>

    </>
  )
}

export default App
