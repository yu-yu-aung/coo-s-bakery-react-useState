import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const CategoryCreateForm = ({storeCategory, setOpenDrawer}) => {

  // const handleCategoryForm = (e) => {
  //   e.preventDefault(); 
  //   const formData = new FormData(e.target); 
  //   console.log(formData.get("new_category_name"));
  //   storeCategory(formData.get("new_category_name"));
  //   e.target.reset();
  //   setOpenDrawer(false);
  // }

  //console.log(useForm());

  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  //console.log(errors);

  const onSubmit = (data) => {
    //console.log(data);
    storeCategory(data.new_category_name);
    reset();
    toast.success("A new category is created!");
    setOpenDrawer(false);
  }

  const handleClickCancel = () => {
    setOpenDrawer(false);
    reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="create_category_form" className="max-w-sm mx-auto mt-6">
        <div className="mb-10">
          <label htmlFor="new_category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Category Name</label>
          <input 
            type="text" 
            id="new_category_name" 
            {...register("new_category_name", { 
              required: {
                value: true,
                message: "Please add a new category!",
              }, minLength: {
                value: 4, 
                message: "Min length is 4."
              }})}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Cake"/>
            {errors.new_category_name && (<p className='text-red-500 mt-1 text-sm'>{errors.new_category_name.message}</p>)}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am sure to create the new category.</label>
        </div>
        <button 
          type="button" 
          onClick={handleClickCancel}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 active:bg-gray-100 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Cancel
        </button>
        <button 
          type="submit" 
          className="text-white bg-blue-700 active:bg-blue-800 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
          Save
        </button>
      </form>

    </div>
  )
}

export default CategoryCreateForm