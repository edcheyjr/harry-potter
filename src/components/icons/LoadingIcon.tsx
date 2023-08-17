import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}
const LoadingIcon = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='none' d='M0 0h24v24H0z' />
    <defs>
      <linearGradient id='a' x1='50%' x2='50%' y1='5.271%' y2='91.793%'>
        <stop offset='0%' stopColor='currentColor' />
        <stop offset='100%' stopColor='currentColor' stopOpacity={0.55} />
      </linearGradient>
      <linearGradient id='b' x1='50%' x2='50%' y1='15.24%' y2='87.15%'>
        <stop offset='0%' stopColor='currentColor' stopOpacity={0} />
        <stop offset='100%' stopColor='currentColor' stopOpacity={0.55} />
      </linearGradient>
    </defs>
    <g fill='none'>
      <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
      <path
        fill='url(#a)'
        d='M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z'
        transform='translate(1.5 1.625)'
      />
      <path
        fill='url(#b)'
        d='M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084 1.5 1.5 0 0 1-.115-2.118Z'
        transform='translate(1.5 1.625)'
      />
    </g>
  </svg>
)
export default LoadingIcon
