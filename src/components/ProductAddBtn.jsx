import { Plus } from 'lucide-react'
import React from 'react'

const ProductAddBtn = () => {
  return (
    <button className="bg-blue-600 p-1 rounded-full size-12 flex justify-center items-center absolute bottom-4 right-4 hover:scale-90" data-drawer-target="create-product-drawer" data-drawer-show="create-product-drawer" aria-controls="create-product-drawer">
      <Plus className='size-6 text-gray-100'/>
    </button>

  )
}

export default ProductAddBtn