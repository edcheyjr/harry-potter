'use client'
import { AppContext } from '@provider/app-context'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Input from '@components/Input'
import Modal from '@components/Modal'
import { Spell } from '@/types'
import SpellCard from './SpellCard'
import { searchStrings } from '@utils/searchStrings'
import { fetchAllSpell } from '@service/api'
import localFont from 'next/font/local'
const harryFont = localFont({ src: '../../../public/fonts/local/HarryP.ttf' })

type Props = {}

const SpellsResult = (props: Props) => {
    const [spells, setSpells] = useState<Spell[]>([])
    const [isSearchLoading, setSearchLoading] = useState(true)
    const [input, setInput] = useState('')
    const appContext = useContext(AppContext)
    const isOpen = appContext?.isSpellModalOpen
    const closeModal = appContext?.handleCloseSpell
    const handleSearchSpell = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const filterSpells = spells.filter((spell) =>
        searchStrings(spell.name, input),
    )
    // console.log('filterSpells', filterSpells)
    useEffect(() => {
        //get spells from backend
        const handleSpell = async () => {
            try {
                const data = (await fetchAllSpell()) as Spell[]
                setSpells(data)
            } catch (error) {
                console.error('error', error)
            }
        }
        handleSpell()
        setSearchLoading(false)
    }, [])
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="w-full py-4 ">
                {' '}
                <div className="px-2 sm:px-4">
                    <Input
                        handleChange={handleSearchSpell}
                        input={input}
                        isLoading={isSearchLoading}
                        placeholder="Search a spell"
                    />
                </div>
                {/* ListCard */}
                <div className="overflow-y-auto overflow-auto max-h-96 lg:max-h-80 xl:max-h-[28em] mt-2 scrollbar scrollbar-thumb-white/[45%]  scrollbar-track-bg-dark">
                    <table className="h-full px-2 sm:px-4 md:px-8 w-full table-auto border-collapse">
                        <thead className="w-full">
                            <tr className="bg-clip-text text-left tracking-widest bg-gradient-to-br from-red-500 from-20% via-orange-500 to-amber-500 text-transparent font-semibold text-xl md:text-2xl xl:text-4xl w-full border-t border-b border-slate-600">
                                <th
                                    className={`${harryFont.className} px-3 md:px-6 xl:px-10 py-3.5 `}
                                    colSpan={2}
                                >
                                    All Spells
                                </th>
                            </tr>
                            <tr className="text-left text-slate-400 font-semibold text-lg xl:text-xl w-full border-t border-b border-slate-600">
                                <th className="pr-3 md:pr-6 pl-3 md:pl-6 xl:pl-10">
                                    name
                                </th>
                                <th className=" pr-3 md:pr-6 pl-3 md:pl-6 xl:pl-10">
                                    description
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {spells.length > 0 ? (
                                filterSpells.length > 0 ? (
                                    filterSpells.map((spell) => (
                                        <SpellCard
                                            spell={spell}
                                            key={spell.id}
                                        />
                                    ))
                                ) : (
                                    spells.map((spell) => (
                                        <SpellCard
                                            spell={spell}
                                            key={spell.id}
                                        />
                                    ))
                                )
                            ) : (
                                <tr className="text-center text-orange-400 text-lg lg:text-xl font-bold tracking-wide border-t border-b border-slate-600 ">
                                    <td
                                        className="px-3 lg:px-6 py-3.5"
                                        colSpan={2}
                                    >
                                        No Spells
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center px-2 sm:px-4 md:px-6 pt-4">
                    <div></div>
                    <button
                        onClick={appContext?.handleCloseSpell}
                        className=" text-slate-400 font-semibold text-sm sm:text-base lg:text-xl border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-2 sm:px-3 py-2 hover:bg-red-500 hover:text-white hover:border-red-300 hover:border-b transition ease-in-out duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default SpellsResult
