import { usePagination, DOTS } from '../../hooks/usePagination'
import PrevNextButton from './PrevNextButton'

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
        <PrevNextButton text='prev' onClick={onPrevious} />
      ) : (
        <div />
      )}
      <div className='flex justify-center items-center gap-2'>
        {paginationRange.map((pageNumber, key) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                className='text-blackfont-bold my-auto mx-auto text-slate-400'
                key={key}
              >
                &#8230;
              </li>
            )
          }
          // Render our Page Pills
          return (
            <div
              key={key}
              className={`text-sm lg:text-base font-medium w-6 h-6 rounded-full hover:bg-primary-orange/40 cursor-pointer text-center align-middle
              ${
                currentPage === pageNumber
                  ? `border-[1px] border-orange-500 text-orange-500`
                  : `border-[1px] border-slate-200/20 text-slate-400`
              }
              }`}
              onClick={() => {
                typeof pageNumber == 'number' && onPageChange(pageNumber)
              }}
            >
              {pageNumber}
            </div>
          )
        })}
      </div>
      {currentPage !== lastPage ? (
        <PrevNextButton onClick={onNext} text='next' />
      ) : (
        <div />
      )}
    </section>
  )
}

export default Paginate
