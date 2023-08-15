'use client'
import { ReactNode, useRef, useState } from 'react'
import { createContext } from 'react'
import { AppContextType, Houses } from 'types.d'

type Props = {
  children: ReactNode
}
const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({ children }: Props) => {
  // house
  const [house, setHouse] = useState<Houses | null>(null)
  //TODO setcolorsthemes

  const ref = useRef<HTMLDivElement | null>(null)

  const sampleAppContext: AppContextType = {
    ref,
    house,
    setHouse,
  }
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
