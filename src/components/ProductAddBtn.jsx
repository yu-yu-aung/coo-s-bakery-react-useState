import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import ProductCreateDrawer from './ProductCreateDrawer';

const ProductAddBtn = () => {

  const [showProductDrawer, setShowProductDrawer] = useState(false);

  const handleProductAddBtn = () => {
    setShowProductDrawer(!showProductDrawer);
  }

  return (
    <>
    <button 
    type='button'
    onClick={handleProductAddBtn}
    className="bg-blue-600 p-1 rounded-full size-12 flex justify-center items-center absolute bottom-4 right-4 hover:scale-90" data-drawer-target="create-product-drawer" data-drawer-show="create-product-drawer" aria-controls="create-product-drawer">
      <Plus className='size-6 text-gray-100'/>
    </button>

    <ProductCreateDrawer showProductDrawer={showProductDrawer} setShowProductDrawer={setShowProductDrawer}/>
    </>

  )
}

export default ProductAddBtn