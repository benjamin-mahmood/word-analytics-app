'use client'
import Stats from './Stats'
import TextArea from './TextArea'
import { useState } from 'react'

export default function Main() {
  const [text, setText] = useState('')
  const numberOfCharacters = text.length

  return (
    <main className='flex flex-col gap-8'>
      <Stats numberOfCharacters={numberOfCharacters} />
      <TextArea
        text={text}
        setText={setText}
      />
    </main>
  )
}
