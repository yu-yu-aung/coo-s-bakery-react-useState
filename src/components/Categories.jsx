import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'


const Categories = () => {

  const categories = [
  { id: 0, title: "All" },
  { id: 1, title: "Bread" },
  { id: 2, title: "Cake" },
  { id: 3, title: "Coffee" },
  { id: 4, title: "Smoothie" },
  ];

  const [activeCategoryId, setActiveCategoryId] = useState(0);

  return (
    <div className='flex flex-col gap-5 items-end pr-3 pl-5'>
    {
      categories.map((el) => 
        <CategoryBtn 
          activeCategoryId = {activeCategoryId} 
          setActiveCategoryId = {setActiveCategoryId}
          category={el} 
          key={el.id}
        />
      )
    }
      
    </div>
    

  )
}

export default Categories