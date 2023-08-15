import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}
const SvgComponent = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 4v16m0 0 6-6m-6 6-6-6'
    />
  </svg>
)
export default SvgComponent
