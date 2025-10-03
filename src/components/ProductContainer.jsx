import React from 'react'
import ProductHeader from './ProductHeader'
import ProductCardList from './ProductCardList'
import ProductAddBtn from './ProductAddBtn'

const ProductContainer = () => {
  return (
    <div className='relative'>
    <div className='flex justify-between py-2 px-3'>
      <ProductHeader/>
    </div>
    <div className='overflow-scroll h-[900px]'>
      <ProductCardList/>
    </div>
    <ProductAddBtn/>
    </div>
  )
}

export default ProductContainer