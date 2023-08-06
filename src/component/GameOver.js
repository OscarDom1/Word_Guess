import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext);


  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? "Your guess is correct" : "Your guess is wrong"}</h3>
      <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver