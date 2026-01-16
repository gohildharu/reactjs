import React, { useContext } from 'react'
import { ButtonContext } from './Process'

const ButtonUI = () => {

  const { no, incre, decre, mul, div } = useContext(ButtonContext)

  return (
    <div>
      <h1>{no}</h1>
      <button onClick={incre}>++++++</button>
      <button onClick={decre}>-------</button>
      <button onClick={mul}>******</button>
      <button onClick={div}>///////</button>
    </div>
  )
}

export default ButtonUI
