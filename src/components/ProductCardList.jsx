import React, { useState } from 'react'
import ProductCard from './ProductCard';

const ProductCardList = () => {

  const [products, setProducts] = useState([
  {
    id: 1,
    category: "Bread",
    name: "Buttery French Morning Croissant",
    price: 5800,
    image: "/images/1.png",
  },
  {
    id: 2,
    category: "Bread",
    name: "Artisan Crusty Rye Loaf",
    price: 6300,
    image: "/images/2.png",
  },
  {
    id: 3,
    category: "Bread",
    name: "Healthy Sesame Multigrain Loaf",
    price: 5800,
    image: "/images/3.png",
  },
  {
    id: 4,
    category: "Bread",
    name: "Golden Classic Sliced Bread",
    price: 6400,
    image: "/images/4.png",
  },

  {
    id: 5,
    category: "Cake",
    name: "Berry Layered Mousse Cake",
    price: 16000,
    image: "/images/5.png",
  },
  {
    id: 6,
    category: "Cake",
    name: "Red velvet double cheese cake",
    price: 10500,
    image: "/images/6.png",
  },
  {
    id: 7,
    category: "Cake",
    name: "Dark Chocolate Fudge Cake",
    price: 10500,
    image: "/images/7.png",
  },
  {
    id: 8,
    category: "Cake",
    name: "Strawberry Glaze Cheesecake",
    price: 12500,
    image: "/images/8.png",
  },

  {
    id: 9,
    category: "Coffee",
    name: "Creamy Classic Hot Cappuccino",
    price: 8000,
    image: "/images/9.png",
  },
  {
    id: 10,
    category: "Coffee",
    name: "Iced Caramel Latte Bliss",
    price: 9500,
    image: "/images/10.png",
  },
  {
    id: 11,
    category: "Coffee",
    name: "Bold Roast Hot Black Coffee",
    price: 8000,
    image: "/images/11.png",
  },
  {
    id: 12,
    category: "Coffee",
    name: "Whipped Ice Mocha Craze",
    price: 8500,
    image: "/images/12.png",
  },

  {
    id: 13,
    category: "Smoothie",
    name: "Frosted Berry Smoothie Burst",
    price: 7800,
    image: "/images/13.png",
  },
  {
    id: 14,
    category: "Smoothie",
    name: "Frosted Strawberry Smoothie Burst",
    price: 7800,
    image: "/images/14.png",
  },
  {
    id: 15,
    category: "Smoothie",
    name: "Frosted Lychee Smoothie Burst",
    price: 9500,
    image: "/images/15.png",
  },
  {
    id: 16,
    category: "Smoothie",
    name: "Frosted Sunkist Smoothie Burst",
    price: 9200,
    image: "/images/16.png",
  },
  {
    id: 17,
    category: "Smoothie",
    name: "Tropical Layered Fruit Smoothie",
    price: 8500,
    image: "/images/17.png",
  },
]);

  return (
    <div className='grid grid-cols-3 gap-5 px-3 py-2'>
      {products.map((el) => 
        <ProductCard product={el} key={el.id}/>
        )}
    </div>
  )
}

export default ProductCardList