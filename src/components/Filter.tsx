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
} from 'react'
import { Filters } from 'types.d'

type Props = {
  value: boolean
  name: Filters
  setFilters: Dispatch<SetStateAction<Record<Filters, boolean>>>
}

const Filter = ({ value, name, setFilters }: Props) => {
  console.log(name, value)
  const route = useRouter()
  const handleFiltering = (e: MouseEvent<HTMLDivElement>) => {
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
