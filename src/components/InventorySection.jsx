import React from 'react'
import Categories from './Categories'
import ProductContainer from './ProductContainer'
import CategoryAddBtn from './CategoryAddBtn'

const InventorySection = () => {
  return (
    <section className='col-span-5 grid grid-cols-5 bg-gray-100 dark:bg-gray-800'>
      <div className='col-span-1 pt-[60px] flex flex-col gap-5 items-end pr-3 pl-5 text-sm'>
        <Categories/>
        <CategoryAddBtn/>
      </div>
      <div className='col-span-4 border-r border-gray-200 dark:border-gray-600 relative'>
        <ProductContainer/>
      </div>
      
    </section>
  )
}

export default InventorySection