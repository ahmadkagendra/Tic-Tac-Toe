import { useState } from 'react'

// COMPONENTS
import BoxImage from '../components/BoxImage'
import Content from '../components/Content'


export default function Index () {
  const [count, setCount] = useState(0)
  const event = (value) => setCount(value)
  return (
    <>
      <BoxImage />
      <h1>Vite + React</h1>
      <Content value={count} eventClick={event}/>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

