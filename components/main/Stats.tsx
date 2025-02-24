'use client'
import { Progress } from '@heroui/react'
import { ProgressProps } from '@heroui/react'
import { FaSquareXTwitter as XIcon } from 'react-icons/fa6'
import { FaSquareInstagram as InstagramIcon } from 'react-icons/fa6'

interface StatsProps {
  numberOfCharacters: number
}

export default function Stats({ numberOfCharacters }: StatsProps) {
  const instagramCharacters = 2200
  const twitterCharacters = 280

  return (
    <section className='flex flex-col gap-4'>
      <CounterBar
        // Twitter / X Post
        label={
          // Check if the number of characters is less than 280
          twitterCharacters - numberOfCharacters >= 0 ? (
            // If it is, show the remaining characters
            <span className='flex items-center'>
              <XIcon
                size={32}
                className='mr-2'
              />
              {twitterCharacters - numberOfCharacters} Zeichen übrig
            </span>
          ) : (
            // If it is not, show the number of characters over the limit
            <span className='flex items-center text-danger'>
              <XIcon
                size={32}
                className='mr-2'
              />
              Du hast {numberOfCharacters - twitterCharacters} Zeichen zu viel
              benutzt
            </span>
          )
        }
        classNames={{
          indicator: 'bg-[#1DA1F2]',
        }}
        maxValue={twitterCharacters}
        value={twitterCharacters - numberOfCharacters}
      />
      <CounterBar
        // Instagram Post
        label={
          // Check if the number of characters is less than 2200
          instagramCharacters - numberOfCharacters >= 0 ? (
            // If it is, show the remaining characters
            <span className='flex items-center'>
              <InstagramIcon
                size={32}
                className='mr-2'
              />
              {instagramCharacters - numberOfCharacters} Zeichen übrig
            </span>
          ) : (
            // If it is not, show the number of characters over the limit
            <span className='flex items-center text-danger'>
              <InstagramIcon
                size={32}
                className='mr-2'
              />
              Du hast {numberOfCharacters - instagramCharacters} Zeichen zu viel
              benutzt
            </span>
          )
        }
        classNames={{
          indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
        }}
        maxValue={instagramCharacters}
        value={instagramCharacters - numberOfCharacters}
      />
    </section>
  )
}

function CounterBar(props: ProgressProps) {
  return (
    <Progress
      className='max-w-full'
      formatOptions={{ style: 'percent' }}
      showValueLabel={true}
      size='lg'
      radius='lg'
      classNames={{
        track: 'drop-shadow-md border border-default',
      }}
      {...props}
    />
  )
}
