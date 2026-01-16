import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br></br>
        <span>{count}</span><br></br>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br></br>
        Name: <input type="text" name="" id="name" placeholder="name" /><br></br>
        Surname: <input type="text" name="" id="surname" placeholder="surname" /><br></br>
        Father Name: <input type="text" name="" id="fathername" placeholder="fathername" /><br></br>
        <button type="button">Submit</button>
      </div>
    </div >
  )
}