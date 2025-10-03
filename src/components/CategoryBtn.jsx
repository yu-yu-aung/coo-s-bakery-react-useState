import React from 'react'

const CategoryBtn = ({category: {id, title}, activeCategoryId, setActiveCategoryId}) => {

  const isActive = id === activeCategoryId; 
  const baseClasses = 'duration-200 text-sm text-end px-4 py-2 w-full rounded-lg  hover:bg-blue-100 hover:border-blue-400 active:bg-blue-100 active:border-blue-400';
  const activeClasses = ' bg-blue-100 border-blue-400 text-blue-800';
  const inactiveClasses = 'bg-transparent border-transparent text-black'

  const handleActiveCategory = () => {
    setActiveCategoryId(id);
  }

  return (
    <button 
    onClick={handleActiveCategory}
    className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {title}
    </button>
  )
}

export default CategoryBtn
