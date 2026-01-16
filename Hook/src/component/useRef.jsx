import React, { useRef } from 'react'

const UseRefExample = () => {

    const textRef = useRef()
    const clickRef = useRef()

    const handleChange = () => {
        textRef.current.style.color="red" 
    }

    const handleClick = () => {
        clickRef.current.style.color='green'
    }


  return (
    <div>
          <input type="text" ref={textRef} name="" id="" onChange={handleChange} />

            <br /><br />

          <input type="text" ref={clickRef} name="" id="" />
          <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRefExample