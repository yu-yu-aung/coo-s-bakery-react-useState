import React from 'react'
import VoucherSummary from './VoucherSummary'
import VoucherItemList from './VoucherItemList'

const VoucherSection = () => {
  return (
    <div className="col-span-2 flex flex-col h-full">
      <VoucherItemList/>
      <VoucherSummary/>
    </div>

  )
}

export default VoucherSection