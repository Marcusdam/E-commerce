import React from 'react'
import Image1 from '../assets/images/shopping 8.png'
import Image2 from "../assets/images/image.jpg";
import Image3 from '../assets/images/kids.png'
import { Link } from 'react-router-dom';


const Categories = () => {
    const categories =[
        {
            image:Image1,
            title: "Men", 
            view: "View All"
        },
        {
            image:Image2,
            title: "Women", 
            view: "View All"
        },
        {
            image: Image3,
            title: "Kids", 
            view: "View All"
        },
    ]
  return (
    <section>
        <div className='grid md:grid-cols-3 gap-6 py-16 mt-10'>
            {categories.map((category, index) =>(
                <div key={index} className='relative shadow-md p-4 border transform transition-transform duration-300 hover:scale-95'>
                    <div className='relative w-full h-64'>
                        <img src={category.image} alt=""  className='object-cover w-full h-full'/>
                    </div>
                    <div className='absolute bottom-5 left-8'>
                    <h1 className='text-xl font-bold'>{category.title}</h1>
                    <Link className='text-gray-700' to="/shop">{category.view}</Link>
                    </div>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Categories