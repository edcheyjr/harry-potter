import { fetchACharacter } from '@service/api'
import { Character } from '../../../../types'
import CharacterSectionPage from '@components/characterSectionPage'
import { Params } from 'next/dist/server/request/params'
type Props = {
    params: Promise<Params> //example  character/1
    searchParams: Promise<any> //example chracter/1?house=asdasd
}

export default async function CharacterPage({ params, searchParams }: Props) {
    let { id } = await params
    console.log('id', id)
    if (Array.isArray(id)) {
        id = id[0]
    }

    let characters: Character[] = []

    try {
        characters = (await fetchACharacter(id || '')) as Character[]
    } catch (error) {
        console.error('error', error)
    }

    return (
        <main className="w-full h-full container mx-auto max-w-7xl px-4 md:px-10  min-[495px]:max-md:px-12  lg:px-4 2xl:px-10">
            <CharacterSectionPage data={characters[0]} />
        </main>
    )
}
