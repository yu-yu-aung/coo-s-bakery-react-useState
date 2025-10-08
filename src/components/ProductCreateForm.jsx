import React from 'react'

const ProductCreateForm = () => {
  return (
    <form id="product-form" className="max-w-sm mx-auto mt-6">
      <div className="mb-10">
      <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Product Name</label>
      <input type="text" id="product-name" name="product-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Vanilla Strawberry" required />
      <label htmlFor="product-price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
      <input type="number" id="product-price" name="product-price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="$2.30" required />
      <label htmlFor="selected-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
      <select id="selected-category" name="selected-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Cake</option>
        <option>Drink</option>
        <option>Smoothie</option>
        <option>Bread</option>
      </select>
      <label htmlFor="new-product-image" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
      <input type="file" id="new-product-image" name="new-product-image" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5 file:bg-blue-400 file:ml-2 file:rounded" placeholder="Upload Product Photo" required />
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am sure to create the new product.</label>
    </div>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 active:bg-gray-100 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      Cancel
    </button>
    <button type="submit" className="text-white bg-blue-700 active:bg-blue-800 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
      Save
    </button>
  </form>

  )
}

export default ProductCreateForm