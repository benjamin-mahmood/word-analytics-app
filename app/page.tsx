import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className='container mx-auto min-w-[350] flex justify-center mt-12'>
      <div className='flex flex-col gap-8 w-3/4 max-w-screen-xl'>
        <Header />
        <Main />
        <Footer />
      </div>
    </main>
  )
}
