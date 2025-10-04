import { X } from 'lucide-react'
import React from 'react'
import CategoryCreateForm from './CategoryCreateForm';

const CategoryCreateDrawer = ({openDrawer, setOpenDrawer, storeCategory}) => {

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  }
  return (
    <div className={`fixed w-[400px] bg-white top-0 p-4 left-0 z-40 h-full duration-300 ${openDrawer ? "translate-x-0 shadow-xl" : "-translate-x-full"}`}>
      <div className='flex justify-between mb-5'>
        <h3 className='items-center mb-4 text-gray-800 dark:text-gray-200 text-xl font-bold'>
          CategoryCreateDrawer
        </h3>
        <X onClick={handleCloseDrawer} className='text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'/>
      </div>
      <CategoryCreateForm storeCategory={storeCategory} setOpenDrawer={setOpenDrawer}/>

    </div>
  )
}

export default CategoryCreateDrawer