import { useState } from 'react';
import React from 'react';
import FontAnimation from './components/FontAnimation';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

import index from './index.css'
import firstSightWords from './data/firstSightWords'
import secondSightWords from './data/secondSightWords';






export default function App() {
  const MAX_COUNT = firstSightWords.length
  const MIN_COUNT = 0

  const [levelOne, setLevelOne] = useState(true)
  // const [levelTwo, setLevelTwo] = useState(false)
  const [word, setWord] = useState(firstSightWords[0])
  const [count, setCount] = useState(MIN_COUNT)
  
 

// function wordRender() { 
//   let num = Math.floor(Math.random() * firstSightWords.length)
//   let newWord = firstSightWords[count] 
//   setWord(newWord)
// }


function prevWord() {
  if (count > MIN_COUNT || count === MAX_COUNT) {
    setCount(prevCount => prevCount - 1)
  } else {
    setCount(MIN_COUNT)
  }
  setWord(levelOne ? firstSightWords[count] : secondSightWords[count])
}

function nextWord() {
  if (count < MAX_COUNT) {
  setCount(count + 1)
  } 
  setWord(levelOne ? firstSightWords[count] : secondSightWords[count])
}

function levelOneSelect() {
  setLevelOne(true)
  setCount(0)
}

function levelTwoSelect() {
  setLevelOne(false) 
  setCount(0)
}
  return (

  <Box className="app" mt="1em">
    

    <FontAnimation />

    <CircularProgress value={count} size='100px' />

    

      <div className="word" id="word">
        {word}
      </div> 

      <div className="buttonDiv">

          <button className="pushable" id="prevWordBtn" onClick={prevWord}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front"> ← </span> 
          </button>

        <button className="pushable" id="nextWordBtn" onClick={nextWord}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front"> → </span> 
        </button>  
      </div>
      <div className="levelBtnDiv">
        <button className="levelBtn" onClick={levelOneSelect}>Level 1 Words</button>
        <button className="levelBtn" onClick={levelTwoSelect}>Level 2 Words</button>
      </div>  
  </Box>
 
  )
}

