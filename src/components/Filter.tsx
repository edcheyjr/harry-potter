import { AppContext } from '@provider/app-context'
import { FILTERS, intialFilterState } from '@utils/constant'
import {
  removeItemFromStorage,
  setStorageItem,
} from '@utils/localstorageAccess'
import { useRouter } from 'next/navigation'
import React, {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useEffect,
  useState,
  useContext,
} from 'react'
import { Filters } from 'types.d'

type Props = {
  value: boolean
  name: Filters
}

const Filter = ({ value, name }: Props) => {
  const appContext = useContext(AppContext)
  const route = useRouter()
  const handleFiltering = (e: MouseEvent<HTMLDivElement>) => {
    appContext?.filtering({ name, value })
  }
  useEffect(() => {
    if (value) {
      route.push(`?${name}=${name}`)
    }
  }, [name, route, value])
  return (
    <div
      className={`text-sm lg:text-base flex justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:text-white hover:bg-red-500 hover:border-red-400 rounded-2xl px-2.5 py-2 border-2 font-bold ${
        value
          ? 'bg-red-500 border-red-400 text-white'
          : 'bg-transparent border-slate-400/90 text-slate-400'
      }`}
      onClick={handleFiltering}
    >
      <h4>{name}</h4>
    </div>
  )
}

export default Filter
