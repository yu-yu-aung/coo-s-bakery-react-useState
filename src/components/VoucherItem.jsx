import React from 'react'

const VoucherItem = () => {
  return (
    <div className="order-note font-mono text-sm p-3 border-b border-blue-200 dark:border-gray-700">
        <div className="flex justify-between px-2">
          <p className="text-gray-800 dark:text-gray-200">
            Buttery French Morning Croissant
          </p>
          <div className="flex gap-2">
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="minus" className="lucide lucide-minus size-2 text-gray-800"><path d="M5 12h14" /></svg>
            </div>
            <span className="item-count text-sm text-gray-800 dark:text-gray-200">1</span>
            <div className="size-4 border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" className="lucide lucide-plus size-2 text-gray-800 p-0"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex gap-2 text-start">
            <p className="text-gray-600 dark:text-gray-300">1</p>
            <p className="text-gray-600 dark:text-gray-300">x</p>
            <p className="text-gray-600 dark:text-gray-300">1000</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">1000</p>
        </div>
      </div>
  )
}

export default VoucherItem