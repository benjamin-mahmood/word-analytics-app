import { H1 } from '../ui/typography/H1'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Header() {
  return (
    <header className='flex flex-col gap-4'>
      <H1>Social-Media Post Checker ✅</H1>
      <ThemeToggle />
    </header>
  )
}
