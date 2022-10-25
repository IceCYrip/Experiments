import React, { useEffect, useState } from 'react'
import './CountingCharacters.css'

const CountingCharacters = () => {
  const [sentence, setSentence] = useState('')
  const [nonSpaceCount, setNonSpaceCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    SpaceCounter()
  }, [sentence])

  function SpaceCounter() {
    let spaces = 0,
      word = 0

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        spaces++
      }
      if (
        sentence[i - 1] !== ' ' &&
        sentence[i] === ' ' &&
        sentence[i + 1] !== ' '
        //   ||
        // (sentence[sentence.length - 1] !== ' ' && sentence[i] !== ' ')
      ) {
        word++
      }
    }
    setWordCount(word)
    setNonSpaceCount(sentence.length - spaces)
  }

  function Reset() {
    let resetting = document?.getElementById('input')
    // @ts-ignore
    resetting.value = ''
    setSentence('')
  }

  return (
    <>
      <div className='main'>
        <span style={{ marginTop: '10vh', marginBottom: '5px' }}>
          Enter your sentence:
        </span>
        <div>
          <input
            id='input'
            type='text'
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
    </>
  )
}

export default CountingCharacters
