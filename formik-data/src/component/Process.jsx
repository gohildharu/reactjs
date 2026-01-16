import React, { createContext, useState } from 'react'
import ButtonUI from './ButtonUI'

export const ButtonContext = createContext()

const Process = () => {

  const [no, setNo] = useState(10)

  const incre = () => {
    setNo(no + 2)
  }

  const decre = () => {
    setNo(no - 2)
  }

  const mul = () => {
    setNo(no * 2)
  }

  const div = () => {
    setNo(no / 2)
  }

  return (
    <div>
      <ButtonContext.Provider value={{ no, incre, decre, mul, div }}>
        <ButtonUI></ButtonUI>
      </ButtonContext.Provider>
    </div>
  )
}

export default Process