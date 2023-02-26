import React, { useEffect } from 'react'
import Card from './Card'

const Home = () => {
  const allApps = []

  useEffect(() => {
    document.title = 'Home'
  }, [])

  allApps.push({ name: 'Basic Login', clickTo: '/basicLogin' })
  allApps.push({ name: 'Adding Inputs', clickTo: '/addingInputs' })
  allApps.push({ name: 'Counting Characters', clickTo: '/countingCharacters' })
  allApps.push({ name: 'Slider Tab', clickTo: '/sliderTab' })

  return (
    <div
      className="main"
      style={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        backgroundColor: 'whitesmoke',
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginTop: 0,
          paddingTop: '13vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        All Applications
      </h1>
      <div
        className="allCards"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 50,
          padding: 30,
        }}
      >
        {allApps.map((app) => {
          return (
            <div className="card">
              <Card label={app.name} appName={app.clickTo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
