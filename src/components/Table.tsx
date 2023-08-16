'use client'

import React, { ReactNode } from 'react'

type Props = {
  head?: Record<string, string>
  body?: Record<string, ReactNode>
}

const renderTableHeadRow = (key: string, value: string) => {
  return (
    <tr className='text-left' key={key}>
      <th className='capitalize bg-slate-300/5 text-slate-300'>{key}</th>
      <th className='text-ellipsis overflow-hidden text-slate-400'>{value}</th>
    </tr>
  )
}
const renderTableBodyRow = (key: string, value: ReactNode) => {
  return (
    <tr className='w-full border border-zinc-400/60 border-dotted' key={key}>
      <td className='capitalize text-slate-300 bg-slate-300/5 px-3'>{key}</td>
      <td className='text-slate-400 lowercase px-6'>{value}</td>
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
