import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'
import CategoryAddBtn from './CategoryAddBtn';


const Categories = () => {

  const [categories, setCategories] = useState([
  { id: 0, title: "All" },
  { id: 1, title: "Bread" },
  { id: 2, title: "Cake" },
  { id: 3, title: "Coffee" },
  { id: 4, title: "Smoothie" },
  ]);

  const [activeCategoryId, setActiveCategoryId] = useState(0);

  const storeCategory = (newCategoryTitle) => {
    const newCategory = {
      id: Date.now(),
      title: newCategoryTitle
    }; 
    setCategories([...categories, newCategory]);
  }

  return (
    <div className='col-span-1 pt-[60px] flex flex-col gap-5 items-end pr-3 pl-5 text-sm'>
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
    <CategoryAddBtn storeCategory = {storeCategory}/>
    </div>

  )
}

export default Categories