import React, { useEffect, useState } from 'react'

const CountingCharacters = () => {
  const [sentence, setSentence] = useState('')
  const [nonSpaceCount, setNonSpaceCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    let spaces = 0

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        spaces++
      }
    }
    setWordCount(spaces)
    setNonSpaceCount(sentence.length - spaces)
  }, [sentence])

  useEffect(() => {
    document.title = 'Counting Characters'
  }, [])

  function Reset() {
    let resetting = document?.getElementById('input')
    // @ts-ignore
    resetting.value = ''
    setSentence('')
  }

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '10vh',
          }}
        >
          <h1>Counting Characters</h1>
          <span style={{ marginBottom: '5px' }}>Enter your sentence:</span>
          <div>
            <input
              id="input"
              type="text"
              onChange={(e) => {
                setSentence(e.target.value)
              }}
            />
            <button style={{ marginLeft: '10px' }} onClick={Reset}>
              Reset
            </button>
          </div>
          <br />
          <span>
            Sentence:
            <b> {sentence}</b>
          </span>

          <br />
          <span>
            Characters WITH spaces:
            <b> {sentence.length}</b>
          </span>

          <br />
          <span>
            Characters WITHOUT spaces:
            <b> {nonSpaceCount}</b>
          </span>

          <br />
          <span>
            Word Count:
            <b> {wordCount}</b>
          </span>
          <br />
        </div>
      </div>
    </>
  )
}

export default CountingCharacters
