'use client'

import React, { ReactNode } from 'react'
import Chip from './Chip'

type Props = {
  head?: Record<string, string>
  body?: Record<string, ReactNode>
}

const renderChipBoolean = (value: boolean) => {
  value ? 'true' : 'false'
  return (
    <td
      className={`${
        value ? 'text-green-400' : 'text-red-400'
      } lowercase px-6 font-bold`}
    >
      {value}
    </td>
  )
}
const renderArrayData = (value: any[]) => {
  return (
    <td className='text-slate-400 lowercase px-6'>
      {value.map((item, index) =>
        index != value.length - 1 ? `${item}, ` : `${item}`
      )}
    </td>
  )
}

const renderTableHeadRow = (key: string, value: string) => {
  return (
    <tr className='' key={key}>
      <th className='capitalize text-left pl-3 py-2  bg-slate-300/5 text-slate-300'>
        {key}
      </th>
      <th className='text-left pl-6 py-2 text-ellipsis overflow-hidden text-slate-400'>
        {value}
      </th>
    </tr>
  )
}
const renderTableBodyRow = (key: string, value: ReactNode) => {
  console.log('value', value)
  const keyColors = key.toLocaleLowerCase().includes('colour')
  return (
    <tr className='w-full border border-zinc-400/60 border-dotted' key={key}>
      <td className='capitalize text-slate-300 bg-slate-300/5 px-3 py-1'>
        {key}
      </td>
      {typeof value == 'boolean' ? (
        renderChipBoolean(value)
      ) : Array.isArray(value) ? (
        renderArrayData(value)
      ) : (
        <td className='text-slate-400 lowercase px-6 py-1 bg-opacity-60'>
          {keyColors && typeof value == 'string' ? (
            <Chip
              style={{
                backgroundColor:
                  value.toLocaleLowerCase().trim() == 'blonde'
                    ? '#FBF6D9'
                    : value.toLocaleLowerCase().trim(),
              }}
              text={value}
            />
          ) : (
            value
          )}
        </td>
      )}
    </tr>
  )
}

export const Table = ({ head, body }: Props) => {
  return (
    <div className='w-full h-auto'>
      <table className='w-full table table-auto border-spacing-y-4 border-spacing-x-1 border-2 border-zinc-400/60 border-dotted overflow-x-auto'>
        {head && (
          <thead className='w-full'>
            {Object.keys(head).map((key: string, index) =>
              renderTableHeadRow(key, head[key])
            )}
          </thead>
        )}
        {body && (
          <tbody className='w-full'>
            {Object.keys(body).map((key: string, index) =>
              renderTableBodyRow(key, body[key])
            )}
          </tbody>
        )}
      </table>
    </div>
  )
}
