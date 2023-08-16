'use client'
import { FILTERS, intialFilterState } from '@utils/constant'
import {
  getStorageItem,
  removeItemFromStorage,
  setStorageItem,
} from '@utils/localstorageAccess'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { createContext } from 'react'
import { AppContextType, Character, Filters, Houses } from 'types.d'

type Props = {
  children: ReactNode
}
const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const route = useRouter()
  // Filters
  const [activeFilter, setFilters] =
    useState<Record<Filters, boolean>>(intialFilterState)

  useEffect(() => {
    const stored = getStorageItem(FILTERS)
    if (stored) {
      setFilters(stored)
    }
  }, [])

  // house
  const [house, setHouse] = useState<Houses | null>(null)
  //TODO setcolorsthemes
  // sharing characterSection
  const characterSectionRef = useRef<HTMLDivElement | null>(null)

  //Handle filters
  const filtering = ({ name, value }: { name: string; value: boolean }) => {
    // Set value to true if false and reset all the other also if true set to false
    if (value) {
      const filterObj = { ...intialFilterState, [name]: false }
      setFilters(filterObj) //deactivate
      removeItemFromStorage(FILTERS) //REMOVE any filter that was persisted
      route.push('/') //back to unfilter search
    } else {
      const filterObj = { ...intialFilterState, [name]: true }
      setFilters(filterObj) //set active
      setStorageItem(FILTERS, filterObj)
      route.push(`?${name}=${name}`)
    }
  }

  const sampleAppContext: AppContextType = {
    ref: characterSectionRef,
    house,
    setHouse,
    activeFilter,
    setFilters,
    characters,
    setCharacters,
    filtering,
  }
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
