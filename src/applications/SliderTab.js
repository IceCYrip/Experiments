import React, { useEffect, useState } from 'react'

const SliderTab = () => {
  useEffect(() => {
    document.title = 'CSS Games'
  }, [])

  const Tabs = ['Home', 'About', 'Services', 'Contact Us']
  const [translate, setTranslate] = useState(0)

  const underlinedTab = {
    position: 'absolute',
    left: '0%',
    bottom: '0%',

    width: '120px',
    backgroundColor: 'red',
    height: '5px',
    position: 'absolute',
    translate: translate,
    transition: '0.2s',
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        rowGap: 100,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {Tabs.map((obj, index) => (
          <div
            onClick={() => setTranslate(index * 120)}
            style={{
              backgroundColor: 'aquamarine',
              padding: 10,
              width: 100,
              cursor: 'pointer',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {obj}
          </div>
        ))}
        <div style={underlinedTab}></div>
      </div>
    </div>
  )
}

export default SliderTab
