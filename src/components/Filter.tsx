import { intialFilterState } from '@utils/constant'
import React, { Dispatch, SetStateAction, MouseEvent } from 'react'
import { Filters } from 'types.d'

type Props = {
  value: boolean
  name: Filters
  setFilters: Dispatch<SetStateAction<Record<Filters, boolean>>>
}

const Filter = ({ value, name, setFilters }: Props) => {
  console.log('value', name)
  const handleFiltering = (e: MouseEvent<HTMLDivElement>) => {
    // Set value to true if false and reset all the other also if true set to false
    if (value) {
      setFilters((initState) => {
        return { ...initState, [name]: false }
      }) //deactivate
    }

    setFilters({ ...intialFilterState, [name]: true }) //set active
  }
  return (
    <div
      className={`cursor-pointer transition duration-300 ease-in-out hover:bg-red-500 hover:border-red-400 rounded px-2.5 py-2 border-2 font-bold ${
        value
          ? 'bg-red-500 border-red-400 text-white'
          : 'bg-transparent border-slate-400/90 text-slate-400'
      }`}
      onClick={handleFiltering}
    >
      {name}
    </div>
  )
}

export default Filter
