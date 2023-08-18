import React from 'react'
import packageJson from 'package.json'
import { APIUrl, COURTESY } from '@utils/constant'
import Link from 'next/link'
// TODO: Finish touches here copyright also aknowlegment of api
type Props = {}

const APP_NAME = packageJson.name
const Footer = (props: Props) => {
  return (
    <div className='border-t border-orange-500/80 bg-bg-dark'>
      <div className='w-full flex flex-wrap gap-4 justify-between items-center container mx-auto max-w-7xl px-4 md:px-10 lg:px-4 2xl:px-10  pb-10 pt-6 lg:pb-4 lg:pt-4 text-slate-300 font-medium'>
        <div className='flex space-x-1 items-center'>
          <p className='capitalize'>courtesy of</p>
          <p className='text-blue-400 hover:underline'>
            <Link href={APIUrl}>{COURTESY}</Link>
          </p>
        </div>
        <div className='flex space-x-1 items-center capitalize'>
          <p className='text-lg lg:text-xl'>&copy;{new Date().getFullYear()}</p>
          <h4 className=''>{APP_NAME}.</h4>
          <p>all rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
