import { Filters } from 'types.d'

export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1555677284-6a6f971638e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
export const APIUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

export const FILTERS = 'filters'

export const intialFilterState: Record<Filters, boolean> = {
  staff: false,
  students: false,
  house: false,
}
