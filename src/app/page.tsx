import CharactersSection from 'components/CharactersSection'
import bg from '/public/harry-potter-books.jpg'
import Hero from 'components/Hero'
import { fetchAllCharacters } from '../service/api'
import { Character } from 'types.d'

export default async function Home() {
  // TODO add filter buttons
  const characters = (await fetchAllCharacters({})) as Character[]
  return (
    <main className='pt-28'>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className='h-full w-full flex flex-col bg-fixed'
      >
        {/* hero */}
        <section className=' w-full mx-auto bg-gradient-to-b from-bg-dark from-5% via-bg-dark/80 via-60% to-bg-dark/50 '>
          <Hero />
        </section>
        {/* Scroll up gris sytem for the cards */}
        <section className=' w-full bg-gradient-to-t from-bg-dark from-[98%] via-bg-dark/80  to-bg-dark/50 space-y-5'>
          <CharactersSection characters={characters} />
        </section>
      </div>
    </main>
  )
}
