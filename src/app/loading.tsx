import CharactersSection from 'components/CharactersSection'
import bg from '/public/harry-potter-books.jpg'
import Hero from 'components/Hero'
import CharacterSkeleton from 'components/skeletons/Character'
import Title from 'components/Title'

export default async function lodaing() {
  let array = new Array(5).fill(1)
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
        <div className='pt-32 container mx-auto max-w-7xl px-10'>
          <div className=' flex flex-col pt-28'>
            <div className='pb-10 w-full'>
              <Title
                title='All characters'
                // desc='Hogwarts teachers and students'
              />
            </div>
            <div className='container mx-auto max-w-7xl gap-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10'></div>
            {array.map((item, index) => {
              return <CharacterSkeleton key={index} />
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
