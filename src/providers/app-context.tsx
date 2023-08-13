'use client'
import { ReactNode, useRef, useState } from 'react'
import { createContext } from 'react'
import { AppContextType } from 'types.d'

type Props = {
  children: ReactNode
}
const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const sampleAppContext: AppContextType = {
    ref,
  }
  return (
    <AppContext.Provider value={sampleAppContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
