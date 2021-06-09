import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
export default function App() {
  const [counterSecond, setCounterSecond] = useState(0)
  const [counterMinute, setCounterMinute] = useState(10)
  const { status } = useGlobalContext()

  useEffect(() => {
    let counterId
    if (status === 'working') {
      counterId = setTimeout(() => {
        if (counterSecond > 0) {
          setCounterSecond(counterSecond - 1)
        }
        if (counterSecond === 0)
          if (counterMinute > 0) {
            setCounterMinute(counterMinute - 1)
            setCounterSecond(59)
          }
      }, 1000)
    }

    return () => {
      clearTimeout(counterId)
    }
  }, [counterSecond, status, counterMinute])
  return (
    <div className='App'>
      <div>
        <h3>
          {counterMinute}:{counterSecond}
        </h3>
      </div>
      {/* <div>time: {time} </div>
      <button onClick={handletimer}>Submit</button>
      <button onClick={stopTimers}>Stop</button>
      <button onClick={resume}>resume</button> */}
    </div>
  )
}
