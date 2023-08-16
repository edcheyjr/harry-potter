import CharactersSection from '@components/CharactersSection'
import bg from '/public/harry-potter-books.jpg'
import Hero from '@components/Hero'
import { fetchAllCharacters } from '@service/api'
import { Character, Filters, Houses } from 'types.d'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

type Props = {
  params: Params //example  character/1
  searchParams: Record<Filters, Filters | Houses> //example chracter/1?house=asdasd
}
export default async function Home({ params, searchParams }: Props) {
  // TODO add filter buttons
  console.log('searchParams', searchParams)
  // two filter that can be there at any given time
  let firstFilterKey: Filters | undefined = undefined
  let secondFilterKey: Houses | undefined = firstFilterKey
  const objectKeys = Object.keys(searchParams) as Filters[]
  objectKeys.forEach((key, index) => {
    // get the first and second index respectively
    if (index == 0) {
      firstFilterKey = searchParams[key] as Filters
    }
    if (index == 1) {
      secondFilterKey = searchParams[key] as Houses
    }
  })
  console.log('firstFilter', firstFilterKey)

  let characters: Character[] = []
  try {
    characters = (await fetchAllCharacters({
      filter: firstFilterKey,
      houseID: secondFilterKey,
    })) as Character[]
  } catch (error) {
    console.error('error', error)
  }
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
