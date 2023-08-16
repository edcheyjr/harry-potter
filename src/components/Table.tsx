'use client'

import React, { ReactNode } from 'react'

type Props = {
  head?: Record<string, string>
  body?: Record<string, ReactNode>
}

const renderTableHeadRow = (key: string, value: string) => {
  return (
    <tr className='' key={key}>
      <th className='capitalize bg-slate-300/5 text-slate-300'>{key}</th>
      <th className='text-ellipsis overflow-hidden text-slate-400'>{value}</th>
    </tr>
  )
}
const renderTableBodyRow = (key: string, value: ReactNode) => {
  return (
    <tr className='w-full' key={key}>
      <td className='capitalize text-slate-300'>{key}</td>
      <td className='text-slate-400 lowercase'>{value}</td>
    </tr>
  )
}

export const Table = ({ head, body }: Props) => {
  return (
    <div className='w-full h-auto'>
      <table className='table table-auto'>
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
