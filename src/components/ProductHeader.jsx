import React from 'react'
import { Search } from 'lucide-react'

const ProductHeader = () => {
  return (
    <>
      <h2 className="text-gray-900 dark:text-gray-50 text-lg">
        Product List <span className="product-count">(17)</span>
      </h2>
      <form className="max-w-md" id="search-form">
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className='size-4 text-gray-800 dark:text-gray-400'/>
          </div>
          <input type="search" id="search" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
      </form>
    </>

  )
}

export default ProductHeader