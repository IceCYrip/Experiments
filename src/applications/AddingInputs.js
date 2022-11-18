import React, { useEffect, useState } from 'react'

const AddingInputs = () => {
  const [count, setCount] = useState([1])

  useEffect(() => {
    document.title = 'Adding Inputs'
  }, [])

  function Adding() {
    setCount((oldElements) => {
      return [...oldElements, count.length + 1]
    })
  }

  function Subtracting() {
    setCount(count.filter((element, index) => index !== count.length - 1))
  }

  function DataHandling(index, value) {
    const temp = count
    temp[index] = { id: index + 1, name: value }
    setCount(temp)
  }

  function Finish() {
    console.log('Final Array: ', count)
  }

  return (
    <div
      style={{
        width: '100vw',
        paddingTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Adding Inputs</h1>
      <div style={{ display: 'flex' }}>
        <button
          style={{
            width: 40,
            height: 40,
            fontSize: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 5px',
          }}
          disabled={count.length === 5 ? true : false}
          onClick={() => {
            Adding()
          }}
        >
          +
        </button>
        <button
          disabled={count.length === 1 ? true : false}
          style={{
            width: 40,
            height: 40,
            fontSize: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 5px',
          }}
          onClick={() => {
            Subtracting()
          }}
        >
          -
        </button>
      </div>

      {count.map((value, index) => {
        return (
          <div style={{ margin: '5px 5px' }}>
            <input
              key={index}
              type="text"
              onChange={(e) => {
                DataHandling(index, e.target.value)
              }}
              placeholder={'Input ' + (index + 1)}
            />
          </div>
        )
      })}
      <button onClick={Finish}>Submit</button>
    </div>
  )
}

export default AddingInputs
