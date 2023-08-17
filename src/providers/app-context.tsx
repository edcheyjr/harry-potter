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
import { AppContextType, Character, FilterTypes, Houses } from 'types.d'

type Props = {
  children: ReactNode
}
const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({ children }: Props) => {
  // house
  const [house, setHouse] = useState<Houses | null>(null)
  //TODO setcolorsthemes
  // sharing characterSection
  const characterSectionRef = useRef<HTMLDivElement | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const route = useRouter()
  // Filters
  const [activeFilter, setFilters] = useState<FilterTypes>(intialFilterState)

  // Search modal
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // open modal
  const handleOpen = () => {
    setIsOpen(true)
  }

  // close fmodal
  const handleClose = () => {
    setIsOpen(false)
  }

  // KeyBoard keys listening
  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      // handle waiting ctrlk press  to open modal
      // event.metaKey - pressed Command key on Macs
      // event.ctrlKey - pressed Control key on Linux or Windows
      if ((event.metaKey || event.ctrlKey) && event.code === 'KeyK') {
        event.preventDefault()
        setIsOpen(true) // open search modal
        console.log('Pressed Command/Control + K')
      }
      //listen for ESC key inorder to close modal
      if (event.code == 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        console.log('pressed escape')
      }
      event.stopPropagation()
    }
    document.addEventListener('keydown', callback)

    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [])

  useEffect(() => {
    const stored = getStorageItem(FILTERS)
    if (stored) {
      setFilters(stored)
    }
  }, [])

  //Handle filters
  const filtering = ({
    name,
    value,
  }: {
    name: string
    value: boolean | Houses
  }) => {
    console.log('name', name)
    console.log('value', value)
    // Set value to true if false or house and reset all the other also if true set to false
    if (value) {
      const filterObj = { ...intialFilterState, [name]: false }
      setFilters(filterObj) //deactivate
      removeItemFromStorage(FILTERS) //REMOVE any filter that was persisted
      route.push('/') //back to unfilter search
    } else {
      console.log('name', name)
      if (name.trim().toLocaleLowerCase() == 'house') {
        // house logic
        const filterObj = { ...intialFilterState, [name]: value } //change state of house from false to House i.e Slytherin
        setFilters(filterObj) //set active
        setStorageItem(FILTERS, filterObj)
        route.push(`?${FILTERS}=${name}&${name}=${value}`) // baseUrl/?filters=house&house=Slytherin
      } else {
        // student and staff logic
        const filterObj = { ...intialFilterState, [name]: true }
        setFilters(filterObj) //set active
        setStorageItem(FILTERS, filterObj)
        route.push(`?${FILTERS}=${name}`)
      }
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
    isModalOpen: isOpen,
    handleOpenModal: handleOpen,
    handleCloseModal: handleClose,
    filtering,
  }
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
