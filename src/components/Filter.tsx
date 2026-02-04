'use client'

import { AppContext } from '@provider/app-context'
import { createPopper } from '@popperjs/core'
import { useRouter } from 'next/navigation'
import { useEffect, useContext, useRef, useState } from 'react'
import { Filters, House, Houses } from '@/types'
import Dropdown from './houseDropDown'
import { FILTERS } from '@utils/constant'
import { compareString } from '@utils/compareString'

type Props = {
    value: boolean | House
    name: Filters
}

const Filter = ({ value, name }: Props) => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
    const appContext = useContext(AppContext)
    const btnDropdownRef = useRef(null)
    const popoverDropdownRef = useRef(null)

    const openDropdownPopover = () => {
        // Reposition only if the element are there
        if (btnDropdownRef.current && popoverDropdownRef.current) {
            createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                placement: 'bottom-start',
            })
        }
        setDropdownPopoverShow(true)
    }

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false)
    }
    const route = useRouter()
    const handleFiltering = () => {
        appContext?.filtering({ name, value })
    }
    useEffect(() => {
        if (value) {
            if (compareString(name, 'house')) {
                route.push(`?${FILTERS}=${name}&${name}=${value}`) // baseUrl/?filters=house&house=Slytherin
            } else {
                route.push(`?${FILTERS}=${name}`)
            }
        }
    }, [name, route, value])
    return !compareString(name, 'house') ? (
        <button
            className={`text-sm lg:text-base flex justify-center items-center cursor-pointer  transition duration-300 ease-in-out hover:text-white hover:bg-red-500 hover:border-red-400 rounded-2xl px-2.5 py-2 border-2 font-bold ${
                value
                    ? 'bg-red-500 border-red-400 text-white'
                    : ' border-slate-400/90 text-slate-200 bg-slate-300/40'
            }`}
            onClick={handleFiltering}
        >
            <h4>{name}</h4>
        </button>
    ) : (
        <div
            onMouseOver={() => openDropdownPopover()}
            onMouseLeave={() => closeDropdownPopover()}
        >
            <button
                ref={btnDropdownRef}
                className={`text-sm lg:text-base flex justify-center items-center cursor-pointer  transition duration-300 ease-in-out hover:text-white hover:bg-red-500 hover:border-red-400 rounded-2xl px-2.5 py-2 border-2 font-bold ${
                    value
                        ? 'bg-red-500 border-red-400 text-white'
                        : ' border-slate-400/90 text-slate-200 bg-slate-300/40'
                }`}
            >
                <h4>{value || name}</h4>
            </button>
            <Dropdown
                isOpen={dropdownPopoverShow}
                onClosePopover={closeDropdownPopover}
                popoverRef={popoverDropdownRef}
                name={name}
                items={Object.values(Houses)}
            />
        </div>
    )
}

export default Filter
