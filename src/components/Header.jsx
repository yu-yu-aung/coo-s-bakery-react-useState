import { Bell, Moon, RefreshCcw, Sun, User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 border-b border-gray-200 dark:border-gray-600">
      <h1 className="font-sans text-xl font-bold text-gray-800 dark:text-gray-100">
        Coo's Bakery
      </h1>
      <nav className="flex gap-5 items-center justify-around">
        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 text-sm p-2.5">
          <div id="theme-toggle-dark-icon" className="size-5">
            <Sun className='size-5'/>
          </div>
          <div id="theme-toggle-light-icon" className="hidden size-5">
            <Moon className='size-5'/>
          </div>
        </button>
        <div className="size-5 text-gray-500 dark:text-gray-400 text-sm">
          <RefreshCcw className='size-5'/>
        </div>
        <div className="size-5 text-gray-500 dark:text-gray-400 text-sm">
          <Bell className='size-5'/>
        </div>
        <div className="size-5 text-gray-500 dark:text-gray-400 text-sm">
          <User className='size-5'/>
        </div>
      </nav>
    </header>

  )
}

export default Header