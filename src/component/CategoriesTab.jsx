import React from 'react';
import { categories } from '../assets/data';
categories

const CategoriesTab = () => {
  return (
    <section className=" mt-10">
        
          <ul className="flex items-center gap-5">
            {categories.map((category, index) => (
              <li
                className="flex justify-between items-center gap-8 text-md font-medium border py-3 px-8 rounded-full shadow-md shadow-yellow-900 mt-8"
                key={index}
              >
                {/* <div className='w-2 h-2 border border-red-500 rounded-full'></div> */}
                {category}
              </li>
            ))}
          </ul>
        
    </section>
  )
}

export default CategoriesTab