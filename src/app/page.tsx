import CharactersSection from '@components/CharactersSection'
import bg from 'bg.jpg'
import Hero from '@components/Hero'
import { fetchAllCharacters } from '@service/api'
import { Character, Filters, Houses } from '@/types'
import { Params } from 'next/dist/server/request/params'

type Props = {
    params: Promise<Params> //example  character/1
    searchParams: Promise<Record<string, Filters | Houses>> //example chracter/1?house=asdasd
}
export default async function Home({ params, searchParams }: Props) {
    const searchResult = await searchParams
    // two filter that can be there at any given time
    let firstFilterKey: Filters | undefined = undefined
    let secondFilterKey: Houses | undefined = firstFilterKey
    const objectKeys = Object.keys(searchResult) as Filters[]
    objectKeys.forEach((key, index) => {
        // get the first and second index respectively
        if (index == 0) {
            firstFilterKey = searchResult[key] as Filters
        }
        if (index == 1) {
            secondFilterKey = searchResult[key] as Houses
        }
    })
    console.log('firstFilter', firstFilterKey)
    console.log('secondeFilter', secondFilterKey)

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
        <main className="pt-28 w-full h-full">
            <div
                style={{ backgroundImage: `url(${bg.src})` }}
                className="h-full w-full flex flex-col bg-fixed"
            >
                {/* hero */}
                <section className=" w-full mx-auto bg-gradient-to-b max-lg:via-bg-dark/90 max-lg:from-10% max-lg:via-30%  from-bg-dark from-5% via-bg-dark/80 via-50% to-bg-dark/50  to-95%">
                    <Hero />
                </section>
                {/* Scroll up gris sytem for the cards */}
                <section className=" w-full bg-gradient-to-t max-lg:via-bg-dark/90 max-lg:from-90%  max-lg:to-[99%] from-bg-dark from-[65%] to-95%  via-bg-dark/80  to-bg-dark/50 space-y-5 h-full">
                    <CharactersSection characters={characters} />
                </section>
            </div>
        </main>
    )
}
