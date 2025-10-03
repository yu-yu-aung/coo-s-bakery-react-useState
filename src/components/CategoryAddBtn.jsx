import { Plus } from 'lucide-react'
import React from 'react'

const CategoryAddBtn = () => {
  return (
    <button type="button" className="flex gap-2 items-center justify-center px-3 py-1 text-end text-gray-800 dark:text-gray-200 hover:scale-90" data-drawer-target="create-category-drawer" data-drawer-show="create-category-drawer" aria-controls="create-category-drawer">
    <Plus className='text-gray-800 dark:text-gray-200 text-sm size-[12px]'/>
    Create
    </button>

  )
}

export default CategoryAddBtn