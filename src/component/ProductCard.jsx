import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productData } from '../assets/data';


export const ProductCard = ({product}) => {

  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const dispatch = useDispatch()

  const HandleAddToCart =(e)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product))
    setAlertMessage('New item added successfully');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);

  }
  return (
    <>
    <section className='pt-4'>
        <Link to={`/product/${product.id}`}>
        <article className='border shadow-md p-4 relative hover:scale-95 hover:duration-500'>
          <img src={product.image} alt="" className='w-full h-48 object-contain'/>
          <div className="">
          <h1 className='text-lg  font-bold'>{product.name}</h1> 
          <span className='text-md text-gray-500'>${product.price}</span> 
          </div>
          <div className='flex items-center'>
          <span className='text-yellow-300'><FaStar/></span>
          <span className='text-yellow-300'><FaStar/></span>
          <span className='text-yellow-300'><FaStar/></span>
          <span className='text-yellow-300'><FaStar/></span>
          </div>
          <div className='absolute bottom-4 right-2 flex justify-center items-center w-8 h-8 mr-4 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-r transition-all cursor-pointer'
          onClick={ HandleAddToCart}>
          <span className='group-hover:hidden '> 
          <BsCart/>
          </span>
          <span className='hidden group-hover:block'>Add To Cart</span>
        </div>
        </article>
        </Link>
       
    </section>
    {showAlert && (
                <div className='fixed top-5 right-5 z-50'>
                    <div className='bg-white bg-opacity-85 border-b-2 border-red-600  py-2 px-4 shadow-sm shadow-green-700'>
                        {alertMessage}
                    </div>
                </div>
            )}
    </>
  )
}
