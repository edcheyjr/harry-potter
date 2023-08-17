'use client'
import React from 'react'
import { Character } from 'types.d'

// TODO
type Props = {
  character: Character
}

const SearchCard = (props: Props) => {
  return (
    <div className='text-white text-center'>
      {props.character.name || 'No name'}
    </div>
  )
}

export default SearchCard
