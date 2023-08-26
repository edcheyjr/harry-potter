'use client'
import { AppContext } from '@provider/app-context'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Input from '@components/Input'
import Modal from '@components/Modal'
import { Spell } from 'types.d'
import SpellCard from './SpellCard'
import { searchStrings } from '@utils/searchStrings'

type Props = {}

const SpellsResult = (props: Props) => {
  const [spells, setSpells] = useState<Spell[]>([])
  const [isSearchLoading, setSearchLoading] = useState(false)
  const [input, setInput] = useState('')
  const appContext = useContext(AppContext)
  const isOpen = appContext?.isSpellModalOpen
  const closeModal = appContext?.handleCloseSpell
  const handleSearchSpell = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setSpells(spells.filter((spell) => searchStrings(spell.name, input)))
  }
  useEffect(() => {
    //get spells from backend
  }, [])
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='w-full py-4 '>
        {' '}
        <div className='px-2 sm:px-4'>
          <Input
            handleChange={handleSearchSpell}
            input={input}
            isLoading={isSearchLoading}
          />
        </div>
        {/* ListCard */}
        <div className='overflow-y-auto overflow-auto max-h-96 lg:max-h-80 xl:max-h-[28em] mt-2 scrollbar scrollbar-thumb-white/[45%]  scrollbar-track-bg-dark'>
          <table className='h-full px-2 sm:px-4 md:px-8 w-full table-fixed border-collapse'>
            <thead className='w-full'>
              {/* FIXME Colspan not working */}
              <tr className='text-slate-400 font-semibold text-lg xl:text-xl w-full border-t border-b border-slate-600 '>
                <th className='px-3 lg:px-6 py-3.5 text-left' colSpan={4}>
                  All Spells
                </th>
              </tr>
              <tr className='text-left text-slate-400 font-semibold text-lg xl:text-xl w-full border-t border-b border-slate-600'>
                <th className=' px-3 lg:px-6 py-3.5'>name</th>
                <th className=' px-3 lg:px-6'>age</th>
                <th className=' px-3 lg:px-6'>actor</th>
                <th className=' px-3 lg:px-6'>house</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {spells.length > 0 ? (
                spells.map((spell, key) => (
                  <SpellCard spell={spell} key={spell.id} />
                ))
              ) : (
                <tr className='text-center text-orange-400 text-lg lg:text-xl font-bold tracking-wide border-t border-b border-slate-600 '>
                  {/* FIXME Colspan not working */}
                  <td className='px-3 lg:px-6 py-3.5' colSpan={4}>
                    Start typing to search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between items-center px-2 sm:px-4 md:px-6 pt-4'>
          {/* House filter */}
          <div></div>
          <button
            onClick={appContext?.handleCloseSpell}
            className=' text-slate-400 font-semibold text-base lg:text-xl  border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-3 py-2 hover:bg-red-500 hover:text-white hover:border-red-300 hover:border-b transition ease-in-out duration-300'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SpellsResult
