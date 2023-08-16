'use client'

import React from 'react'

type Props = {
  title?: string
  head?: Record<string, string>
  body?: Record<string, number | string | boolean>
}

const renderTitle = (title: string) => {
  return (
    <h3 className='uppercase tracking-tight text-white font-light'>{title}</h3>
  )
}
const renderTableHeadRow = (key: string, value: string) => {
  return (
    <th>
      <td>{key}</td>
      <td>{value}</td>
    </th>
  )
}
const renderTableBodyRow = (key: string, value: string | number | boolean) => {
  return (
    <tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  )
}

const Table = ({ title, head, body }: Props) => {
  return (
    <div>
      {title && renderTitle(title)}
      <table>
        {head && (
          <thead>
            {Object.keys(head).map((key: string, index) =>
              renderTableHeadRow(key, head[key])
            )}
          </thead>
        )}
        {body && (
          <tbody>
            {Object.keys(body).map((key: string, index) =>
              renderTableBodyRow(key, body[key])
            )}
          </tbody>
        )}
      </table>
    </div>
  )
}
