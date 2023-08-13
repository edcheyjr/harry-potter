import bg from '/public/harry-potter-books.jpg'
import Hero from 'components/Hero'

export default function Home() {
  return (
    <main
      className='min-h-screen bg-fixed'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* hero */}
      <section>
        <Hero />
      </section>
      {/* Scroll up gris sytem for the cards */}
      <section className='bg-bg-dark h-2/3'>
        <div className='container mx-auto max-w-7xl px-10 '>sad</div>
      </section>
    </main>
  )
}
