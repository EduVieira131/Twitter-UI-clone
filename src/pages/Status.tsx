import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../Components/Header'
import { Separator } from '../Components/Separator'
import { Tweet } from '../Components/Tweet'

import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha, faz sentido!',
    'Que legal!'
  ])

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    if (!newAnswers) {
      return
    }

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem nulla quasi eveniet quos a at rem. Suscipit voluptatum quo pariatur unde deserunt alias a necessitatibus qui molestiae, quas ipsam." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/EduVieira131.png" alt="Eduardo Vieira" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={e => {
              setNewAnswers(e.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
