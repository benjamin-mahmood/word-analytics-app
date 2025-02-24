'use client'
import { Textarea as TextareaHeroUI } from '@heroui/input'
import { useState } from 'react'

interface TextAreaProps {
  text: string
  setText: (text: string) => void
}

export default function TextArea({ text, setText }: TextAreaProps) {
  const [error, setError] = useState('')

  function handleChange(text: string) {
    // Check for script tags
    if (text.includes('<script>') || text.includes('</script>')) {
      setError('Script Tags sind nicht erlaubt!')
      text = text.replace(/<script>/g, '')
      text = text.replace(/<\/script>/g, '')
      return
    }
    // check for length
    if (text.length > 3000) {
      setError('Text darf nicht länger als 3000 Zeichen sein!')
      return
    }
    setError('')
    setText(text)
  }

  return (
    <div>
      <TextareaHeroUI
        //styling
        variant='bordered'
        color='default'
        radius='lg'
        label='Post Text:'
        placeholder='Hier den Text deines Posts einfügen'
        labelPlacement='inside'
        minRows={8}
        size='lg'
        //features
        spellCheck='false'
        isClearable
        //value and change handler
        value={text}
        onValueChange={handleChange}
        //validation
        isInvalid={error.length > 0}
        errorMessage={error}
      />
    </div>
  )
}
