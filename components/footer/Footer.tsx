import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Footer() {
  return (
    <footer className='flex justify-between'>
      <small>
        &copy; {new Date().getFullYear()} Benjamin Mahmood. Alle Rechte
        vorbehalten.
      </small>
      {/* <small>
        Letzter Check:{' '}
        {new Date(Date.now()).toLocaleTimeString('de-DE', {
          // hour: '2-digit',
          minute: '2-digit',
        })}
      </small> */}
      <ThemeToggle />
    </footer>
  )
}
