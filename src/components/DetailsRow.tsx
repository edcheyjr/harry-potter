import { ReactNode } from 'react'

type Props = {
  label: ReactNode
  value: ReactNode
  className?: string
}
export const RenderDetailsRow = ({ label, value, className }: Props) => {
  return (
    <tr className={className ?? 'text-sm md:text-base xl:text-lg'}>
      <td>{label}</td>

      <td className='flex'>{value}</td>
    </tr>
  )
}
