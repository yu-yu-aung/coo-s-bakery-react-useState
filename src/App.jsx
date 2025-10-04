import React from 'react'
import Header from './components/Header'
import InventorySection from './components/InventorySection'
import VoucherSection from './components/VoucherSection'
import { Toaster } from 'sonner'

 
const App = () => {
  return (

    <main className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800'>
      <Header/>
      <section className="lower flex-1 grid grid-cols-7"> 
        <InventorySection/>
        <VoucherSection/>
      </section>
      <Toaster position="bottom-right" richColors={true}/>
    </main>
    
  )
}

export default App