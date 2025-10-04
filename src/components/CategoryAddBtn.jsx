import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import CategoryCreateDrawer from './CategoryCreateDrawer'

const CategoryAddBtn = ({storeCategory}) => {

  const [openDrawer, setOpenDrawer] = useState(false);
  
  const handleCreateBtn = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <button 
      type="button" 
      onClick={handleCreateBtn}
      className="flex gap-2 items-center justify-center px-3 py-1 text-end text-gray-800 dark:text-gray-200 hover:scale-90" data-drawer-target="create-category-drawer" data-drawer-show="create-category-drawer" aria-controls="create-category-drawer">
      <Plus className='text-gray-800 dark:text-gray-200 text-sm size-[12px]'/>
      Create
      </button>
      <CategoryCreateDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} storeCategory={storeCategory}/>
    </>

  )
}

export default CategoryAddBtn