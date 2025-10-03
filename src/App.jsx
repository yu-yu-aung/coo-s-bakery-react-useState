import React from 'react'
import Header from './components/Header'
import InventorySection from './components/InventorySection'
import VoucherSection from './components/VoucherSection'

 
const App = () => {
  return (

    <main className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800'>
      <Header/>
      <section className="lower flex-1 grid grid-cols-7"> 
        <InventorySection/>
        <VoucherSection/>
      </section>
    </main>
    
  )
}

export default App