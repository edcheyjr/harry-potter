import CharactersSection from 'components/CharactersSection'
import bg from '/public/harry-potter-books.jpg'
import Hero from 'components/Hero'

export default function Home() {
  return (
    <main
      className='h-full w-full flex flex-col bg-fixed'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* hero */}
      <section className=' w-full mx-auto bg-gradient-to-b from-bg-dark from-5% via-bg-dark/80 via-60% to-bg-dark/40 '>
        <Hero />
      </section>
      {/* Scroll up gris sytem for the cards */}
      <section className=' w-full bg-gradient-to-t from-bg-dark from-45% via-bg-dark/[80%] to-bg-dark/40 space-y-5'>
        <CharactersSection />
      </section>
    </main>
  )
}
