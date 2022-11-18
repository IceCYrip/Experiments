import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Home from './Home'
import AddingInput from '../applications/AddingInputs'
import CountingCharacters from '../applications/CountingCharacters'
import BasicLogin from '../applications/BasicLogin'

const CustomRouter = () => {
  return (
    <>
      <BrowserRouter>
        <HomeButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addingInputs" element={<AddingInput />} />
          <Route path="/countingCharacters" element={<CountingCharacters />} />
          <Route path="/basicLogin" element={<BasicLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default CustomRouter

function HomeButton() {
  const navigate = useNavigate()
  return (
    <>
      <button
        style={{
          width: 120,
          height: 40,
          fontSize: 'large',
          position: 'absolute',
          top: '2%',
          left: '2%',
        }}
        onClick={() => {
          navigate('/')
        }}
      >
        Home
      </button>
    </>
  )
}
