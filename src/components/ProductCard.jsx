import { Tag } from 'lucide-react'
import React from 'react'

const ProductCard = ({product: {id, name, category, price, image}}) => {

  return (
    <div className="product-card col-span-1 h-auto border border-gray-400 rounded-lg pb-2">
      <div className="w-full h-[50%] overflow-hidden rounded-t-lg border-b-2 border-blue-100">
        <img src={image} alt="cake photo" className="w-full h-full object-cover product-image" />
      </div>
      <div className="p-2 flex flex-col items-start h-[140px]">
        <span className="border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-sm text-sm px-2 py-1 my-2 inline-block product-category">{category}</span>
        <p className="text-sm font-semibold line-clamp-2 text-gray-800 dark:text-gray-100 my-2 product-name">{name}</p>
        <div className="mt-auto mb-1 flex gap-3 text-gray-600 dark:text-gray-300">
          <div className="size-4">
            <Tag/>
          </div>
          <p className="font-mono text-sm">
            <span className="product-price">{price}</span> MMK
          </p>
        </div>
      </div>
    </div>

  )
}

export default ProductCard