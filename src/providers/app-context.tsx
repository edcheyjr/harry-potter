'use client'
import { compareString } from '@utils/compareString'
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
  const [isLoadingCharacters, setIsLoadingCharacters] = useState<boolean>(true)
  // house
  const [house, setHouse] = useState<Houses | null>(null)
  //TODO setcolorsthemes
  // sharing characterSection
  const characterSectionRef = useRef<HTMLDivElement | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const route = useRouter()
  // Filters
  const [activeFilter, setFilters] = useState<FilterTypes>(intialFilterState)

  // paginationCurrentPage
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Search modal
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  const [isOpenSpell, setIsOpenSpell] = useState<boolean>(false)
  // open search modal
  const handleOpenSearch = () => {
    setIsOpenSearch(true)
    // route.push('/') //TODO:Might be needed due to a bug but ruins user experience fix the bug of searching and filtering to behaviour
  }

  // close search modal
  const handleCloseSearch = () => {
    setIsOpenSearch(false)
  }
  // open search modal
  const handleOpenSpell = () => {
    setIsOpenSpell(true)
    console.log('isOpenSpell', isOpenSpell)
    // route.push('/')
  }

  // close search modal
  const handleCloseSpell = () => {
    setIsOpenSpell(false)
  }

  // KeyBoard keys listening
  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      // handle waiting ctrlk press  to open modal
      // event.metaKey - pressed Command key on Macs
      // event.ctrlKey - pressed Control key on Linux or Windows
      if ((event.metaKey || event.ctrlKey) && event.code === 'KeyK') {
        event.preventDefault()
        setIsOpenSearch(true) // open search modal
        console.log('Pressed Command/Control + K')
      }
      //listen for ESC key inorder to close modal
      if (event.code == 'Escape') {
        event.preventDefault()
        setIsOpenSearch(false)
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
    setIsLoadingCharacters(false)
  }, [])

  const cleanFilters = () => {
    setCurrentPage(1)
    setFilters(intialFilterState) //deactivate
    removeItemFromStorage(FILTERS) //REMOVE any filter that was persisted
    route.push('/') //back to unfilter search
  }

  //Handle filters
  const filtering = ({
    name,
    value,
  }: {
    name: string
    value: boolean | Houses
  }) => {
    // console.log('name', name)
    // console.log('value', value)
    // House Logic here
    if (compareString(name, 'house')) {
      if (typeof value == 'boolean') {
        console.error('Wrong type passed, shoudl be Houses type')
        return
      }
      // compare previous value and current assuming previous is not false[could be null] just used false for convinience
      if (activeFilter.house && typeof value != 'boolean') {
        if (compareString(activeFilter.house, value)) {
          cleanFilters()
        } else {
          // if it passes all that test it mean it either false or the user is click on another filter house set to that
          setCurrentPage(1)
          const filterObj = { ...intialFilterState, [name]: value }
          setFilters(filterObj) //set active
          setStorageItem(FILTERS, filterObj)
          route.push(`?${FILTERS}=${name}&${name}=${value}`) // baseUrl/?filters=house&house=Slytherin
        }
      } else {
        setCurrentPage(1)
        // if it passes all that test it mean it either false or the user is click on another filter house set to that
        const filterObj = { ...intialFilterState, [name]: value }
        setFilters(filterObj) //set active
        setStorageItem(FILTERS, filterObj)
        route.push(`?${FILTERS}=${name}&${name}=${value}`) // baseUrl/?filters=house&house=Slytherin
      }
    } else {
      // Student and Staff Here
      if (value) {
        cleanFilters()
      } else {
        setCurrentPage(1)
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
    currentPage,
    setCharacters,
    setCurrentPage,
    isSearchModalOpen: isOpenSearch,
    isSpellModalOpen: isOpenSpell,
    isLoadingCharacters,
    setIsLoadingCharacters,
    handleOpenSearch,
    handleCloseSearch,
    handleOpenSpell,
    handleCloseSpell,
    cleanFilters,
    filtering,
  }
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
