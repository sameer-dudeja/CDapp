import React from 'react'
import { useGlobalContext } from '../components/context'
import Timer from '../components/timer'
const Home = () => {
  const { openModal, stopTimers } = useGlobalContext()
  return (
    <>
      <div className='classBar'>
        <div className='classbar-name'>
          <h3>Trial Lesson [Grade 1-3] </h3>
        </div>
        <div className='classbar-time'>
          <Timer />
        </div>
        <div className='classbar-btn-div'>
          <button
            onClick={() => {
              openModal()
              stopTimers()
            }}
            className='btn1'
          >
            End Class
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
