import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@heroui/button'

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Button color='primary'>Button</Button>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
