import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
