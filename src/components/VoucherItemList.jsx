import React from 'react'
import VoucherItem from './VoucherItem'


const VoucherItemList = () => {
  return (
    <>
      <div className="p-3">
        <h2 className="text-gray-900 dark:text-gray-50">Order Summary</h2>
      </div>
      <VoucherItem/>
      <VoucherItem/>
    </>
  )
}

export default VoucherItemList