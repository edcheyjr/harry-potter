'use client'

import LeftArrowIcon from '@components/icons/LeftArrow'
import { usePagination, DOTS } from '../../hooks/usePagination'
import PrevNextButton from './PrevNextButton'
import RightArrowIcon from '@components/icons/RightArrow'

type Props = {
  onPageChange: (currentPage: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

/**
 *
 * @param {*} props parameter for the pagination components
 * @returns
 */
const Paginate = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <section className='h-fit flex w-full mt-14 mb-5 justify-between'>
      {currentPage !== 1 ? (
        <PrevNextButton
          text='prev'
          onClick={onPrevious}
          leftIcon={
            <LeftArrowIcon
              className='fill-current h-4 w-4 p-0 m-0'
              title='previous'
            />
          }
        />
      ) : (
        <div />
      )}
      <div className='flex justify-center items-center space-x-1.5'>
        {paginationRange.map((pageNumber, key) => {
          // Render our Page Pills
          return (
            <div
              key={key}
              className={`${
                pageNumber === DOTS
                  ? 'font-black tracking-widest'
                  : `cursor-pointer hover:font-semibold ${
                      currentPage === pageNumber || 'hover:bg-white/20 '
                    }`
              }
              relative
              transition ease-in-out duration-300 
              text-sm lg:text-base 2xl:text-lg font-medium w-10 h-10 rounded-full 
              ${
                currentPage === pageNumber
                  ? `border-[2px] border-orange-500 text-orange-500 font-extrabold`
                  : `border border-slate-200/20 text-slate-400`
              }
              }`}
              onClick={() => {
                typeof pageNumber == 'number' && onPageChange(pageNumber)
              }}
            >
              <span className='absolute bottom-1/2 transform left-1/2 -translate-x-[45%] translate-y-[39%] h-fit text-center align-middle'>
                {' '}
                {pageNumber}
              </span>
            </div>
          )
        })}
      </div>
      {currentPage !== lastPage ? (
        <PrevNextButton
          onClick={onNext}
          text='next'
          rightIcon={
            <RightArrowIcon
              className='h-4 w-4 p-0 m-0 fill-current'
              title='next'
            />
          }
        />
      ) : (
        <div />
      )}
    </section>
  )
}

export default Paginate
