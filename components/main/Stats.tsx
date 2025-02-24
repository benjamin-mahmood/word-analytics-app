'use client'
import { Progress } from '@heroui/react'
import { ProgressProps } from '@heroui/react'

export default function Stats() {
  return (
    <section className='flex flex-col gap-4'>
      <CounterBar
        label='🐥 Tweet / X - Post'
        classNames={{
          indicator: 'bg-[#1DA1F2]',
        }}
        maxValue={280}
        value={280}
      />
      <CounterBar
        label='📸 Instagram Captions'
        classNames={{
          indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
        }}
        maxValue={2200}
        value={2200}
      />
    </section>
  )
}

function CounterBar(props: ProgressProps) {
  return (
    <Progress
      className='max-w-full'
      formatOptions={{ style: 'decimal' }}
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
