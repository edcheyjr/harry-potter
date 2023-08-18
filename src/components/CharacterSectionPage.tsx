'use client' //use client directive
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { DEFAULT_IMAGE } from '@utils/constant'
import NotFound from '@components/NotFound'
import { handleColor } from '@utils/handleColor'
import { Character, Houses, WandType } from 'types.d'
import localFont from 'next/font/local'
import { changeDateFormat } from '@utils/changeDateFormat'
import Label from './Label'
import Chip from './Chip'
import { RenderDetailsRow } from './DetailsRow'
import PrimaryButton from './PrimaryButton'
import { useRouter } from 'next/navigation'
import Accordion from './Accordion'
import { Table } from './Table'
import { AppContext } from '@provider/app-context'
import SearchResultModal from '@components/SearchResult'
import { compareString } from '@utils/compareString'
const harryFont = localFont({ src: '../../public/fonts/local/HarryP.ttf' })

type Props = {
  data?: Character
}

const CharacterSectionPage = ({ data }: Props) => {
  const appContext = useContext(AppContext)
  const route = useRouter()
  const [wand, setWand] = useState<WandType>({})
  const [personality, setPersonality] = useState<string[]>([])
  const [restOfData, setRestOfData] = useState<Record<string, ReactNode>>({})
  const [textColor, setTextColor] = useState<string>('text-red-400')
  const [bgColor, setBGColor] = useState<string>('bg-amber-300')
  const [borderColor, setBorderColor] = useState<string>('border-orange-500')

  // console.log('bgColor', bgColor)

  // if (data?.wand) {
  // }
  // Object.keys(wand)
  useEffect(() => {
    // data?.house
    //   ? appContext?.setHouse(resolveHouseNames(data.house))
    //   : appContext?.setHouse(null)
    // rest of the data goes to table
    const restObj = {
      id: data?.id,
      yearOfBirth: data?.yearOfBirth,
      ancestry: data?.ancestry,
      eyeColour: data?.eyeColour,
      hairColour: data?.hairColour,
      patronus: data?.patronus,
      hogwartsStudent: data?.hogwartsStudent,
      hogwartsStaff: data?.hogwartsStaff,
      alternate_actors: data?.alternate_actors,
      alive: data?.alive,
    }
    const houseChip = data?.house
      ? {
          house: (
            <Chip
              className={textColor + `${' '} ${bgColor}`}
              text={data?.house}
            />
          ),
        }
      : {}
    setRestOfData({ ...houseChip, ...restObj })

    // Personality
    if (data?.gender || data?.species || data?.wizard) {
      let newArr = []
      const wizardNameGender = compareString(data?.gender, 'female')
        ? 'witch'
        : 'wizard'
      const genderSign = compareString(data.gender, 'female') ? ' ⚢' : ' ⚣'

      data?.species && newArr.push(data.species)
      data?.gender && newArr.push(`${data.gender}${genderSign}`)
      data.wizard && newArr.push(`${wizardNameGender} 🧙‍♂️`)
      setPersonality(newArr)
    }

    // Wand
    setWand(data?.wand)

    //TOFIX Color are assigned but dont render as expected
    if (data && data?.house) {
      let house = data.house
      setTextColor(handleColor(house, 'primary', 'text'))
      setBGColor(handleColor(house, 'secondary', 'bg'))
      setBorderColor(handleColor(house, 'primary', 'border'))
    }
  }, [appContext, bgColor, data, textColor])

  console.log('bgColor', bgColor)
  console.log('textColor', textColor)
  console.log('borderColor', borderColor)
  if (!data)
    return (
      <NotFound
        text="😱Oops, we don't know that character"
        buttonChildren='Go Back'
      />
    )

  return (
    <div className='w-full lg:flex justify-center pt-24 xl:pt-28'>
      <section className='lg:w-[45%] xl:w-2/5 flex flex-col justify-evenly px-1 xl:px-8'>
        <div className='h-full w-full justify-center flex'>
          {/* FIXME when using src with next/Image possible error relating to this https://github.com/vercel/next.js/issues/52116 resolving to bg style*/}

          <article
            style={{
              backgroundImage: `url(${data?.image || DEFAULT_IMAGE})`,
            }}
            title={data.name || 'NO NAME'}
            // xl 463px lg 400px sm: 350px
            className={`
            
            w-full min-[500px]:w-2/3  lg:w-full h-96 sm:h-[38rem] border-t-2 border-b-[5px] border-r-2 border-l-2 bg-clip-border bg-cover ${bgColor}`}
          />
        </div>
      </section>
      {/* Character Details */}
      <section className='relative lg:w-[55%] xl:w-3/5 px-3 xl:px-6'>
        {/* Crest */}
        <div className='absolute top-[2%] right-[2%] w-auto h-auto my-auto'>
          {data.house && (
            <Image
              src={require(`/public/crests/${data.house}.png`)}
              className='h-auto w-10 lg:w-20 rounded-md'
              title={data.house && data.house}
              alt={data.house || 'no house'}
            />
          )}
        </div>

        {/* Descriptions */}

        <div className='flex space-y-2 flex-col pt-3'>
          {/* Name */}
          <h2
            className={`${harryFont.className} 
              capitalize text-4xl font-medium text-ellipsis overflow-hidden text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-amber-500 via-orange-500 tracking-wider lg:tracking-widest`}
          >
            {data.name}
          </h2>
          <table className='w-full table-auto '>
            <tbody>
              {/* Akas */}
              {data.alternate_names.length > 0 && (
                <RenderDetailsRow
                  label={<Label text='A.k.a' />}
                  value={data.alternate_names.map((item, key) => (
                    <div
                      key={key}
                      className='text-slate-400 text-sm min-[500px]:text-lg'
                    >
                      <span className='font-medium capitalize'>
                        {item.trim()}
                      </span>
                      <span className='md:mx-2 font-semibold'>
                        {key !== data.alternate_names.length - 1 && '|'}
                      </span>
                    </div>
                  ))}
                />
              )}
              {/* Date Of Birth */}
              {data?.dateOfBirth && (
                <RenderDetailsRow
                  label={<Label text='D.O.B' />}
                  value={
                    <span className='font-medium capitalize text-slate-400'>
                      {changeDateFormat(data?.dateOfBirth) || 'No DoB'}
                    </span>
                  }
                />
              )}

              {/*Main Actor */}
              {data?.actor && (
                <RenderDetailsRow
                  label={<Label text='Actor' />}
                  value={
                    <span className='font-medium capitalize text-slate-400'>
                      {data?.actor || 'No Actor'}
                    </span>
                  }
                />
              )}
            </tbody>
          </table>
        </div>
        {/* Divider */}
        <div className='w-full h-0 border-2 border-dotted border-white/40 my-5'></div>
        <table className='table-auto '>
          <tbody className=''>
            {/* Wand Name */}
            {wand && (
              <RenderDetailsRow
                className='text-sm md:text-base '
                label={<Label text='Wand 🪄' />}
                value={Object.keys(wand).map((key, index) => (
                  <div key={index + key} className='text-slate-400'>
                    <span className='font-medium text-red-400 capitalize '>
                      {key.trim()}:{' '}
                    </span>
                    <span className='font-medium text-orange-300  capitalize '>
                      {wand[key]}
                    </span>
                    <span className='mx-2 font-semibold'>
                      {index !== Object.keys(wand).length - 1 && ' '}
                    </span>
                  </div>
                ))}
              />
            )}
            {/* Gender  Species  is Wizard*/}
            <RenderDetailsRow
              className='text-sm md:text-base '
              label={<Label text='Personality' />}
              value={personality.map((item, key) => (
                <div key={key} className='text-slate-400'>
                  <span className='font-medium capitalize '>{item.trim()}</span>
                  <span className='mx-0.5 lg:mx-2 font-semibold'>
                    {key !== personality.length - 1 && '|'}
                  </span>
                </div>
              ))}
            />
          </tbody>
        </table>
        <div className='mt-8'>
          <PrimaryButton onClick={() => route.back()}>Go Back</PrimaryButton>
        </div>
        {/* Divider */}
        <div className='w-full h-0 border-2 border-dotted border-white/40 mt-5 mb-2'></div>
        {/* Tables 1*/}
        <Accordion title='More Details'>
          {
            <Table
              head={{
                Attributes: data.name,
              }}
              body={restOfData}
            />
          }
        </Accordion>
      </section>
      {/* Search */}
      <SearchResultModal />
    </div>
  )
}

export default CharacterSectionPage
