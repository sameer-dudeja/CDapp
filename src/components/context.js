import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [status, setStatus] = useState('working')
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    console.log()
    setIsModalOpen(false)
  }
  const stopTimers = () => {
    setStatus('paused')
  }
  const resume = () => {
    setStatus('working')
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        status,
        stopTimers,
        resume,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
