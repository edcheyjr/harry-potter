import { ReactNode } from 'react'

type Props = {
  label: ReactNode
  value: ReactNode
  className?: string
}
export const RenderDetailsRow = ({ label, value, className }: Props) => {
  return (
    <tr className={className ?? 'text-base xl:text-lg'}>
      <td>{label}</td>

      <td className='flex flex-wrap'>{value}</td>
    </tr>
  )
}
