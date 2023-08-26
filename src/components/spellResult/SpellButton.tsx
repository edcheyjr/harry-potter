'use client'
import PrimaryButton from '@components/PrimaryButton'
import { AppContext } from '@provider/app-context'
import React, { useContext } from 'react'

type Props = {}

const SpellButton = (props: Props) => {
  const appContext = useContext(AppContext)
  const openSpellModal = appContext?.handleOpenSpell

  return <PrimaryButton onClick={openSpellModal}>Spells</PrimaryButton>
}

export default SpellButton
