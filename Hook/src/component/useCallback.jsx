import React, { useCallback, useState } from 'react'

const ButtonUI = React.memo(({ propsClick }) => {
    return <button onClick={propsClick}>Click</button>
})

const UseCallback = () => {

    const [no, setNo] = useState(0)

    const count = useCallback(() => {
        setNo((no) => no + 1)
    })

    return (
        <div>
            <h1>{no}</h1>
            <ButtonUI propsClick={count} />
        </div>
    )
}

export default UseCallback
