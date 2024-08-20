import React, { useState } from 'react';
import EmptyCart from "../assets/images/empty-cart.png"
import { FaTrashAlt, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import ChangeAddress from './ChangeAddress';
import {removeFromCart, decreaseQuantity, increaseQuantity} from "../redux/cartSlice"
import { Link } from 'react-router-dom';




const Cart = () => {
    const cartItem = useSelector(state => state.cart);
    const [address, setAddress] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const dispatch = useDispatch()

    

  return (
   <>
    <section className="max-w-[1024px] mx-auto mt-[160px] px-4 lg:px-0">
    <div className="mt-8">
      <h1 className="text-xl sm:text-3xl font-bold font-rubik ">
      Shopping Items
      </h1>
      <div >
  {cartItem.products.length > 0 ? (
    <div className='grid md:grid-cols-12 gap-10 pt-4'>
      <div className='md:col-span-8'>
        <div className='flex justify-between items-center border-t border-b py-2'>
          <h2 className='text-lg font-bold'>Products</h2>
          <ul className='flex items-center gap-2 font-bold '>
            <li className='border-r px-2 text-center'>Price</li>
            <li className='border-r px-2 text-center'>Quantity</li>
            <li className='border-r px-2 text-center'>Subtotal</li>
            <li className='px-2 text-center'>Remove</li>
          </ul>
        </div>
        <div>
          {cartItem.products.map((product) => (
            <div className='flex justify-between items-center border-b py-4' key={product.id}>
              <div className='flex flex-col md:flex-row items-center space-x-4 '>
                <img src={product.image} alt={product.name} className='w-14 h-16 object-cover' />
                <h2 className='text-[14px] md:text-md '>{product.name}</h2>
              </div>
              <div className='flex justify-between items-center gap-12'>
              <div className='flex items-center  w-1/4 text-center '>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <span className='mr-4'>{product.quantity}</span>
              <div className='flex flex-col items-center gap-1 w-1/4 text-center -ml-12'>
                <button onClick={() => dispatch(increaseQuantity(product.id))} className=''><FaCaretUp/></button>
                
                <button onClick={() => dispatch(decreaseQuantity(product.id))} className=' '><FaCaretDown/></button>
              </div>
              <div className='flex items-center gap-4 w-1/4 text-center'>
                <span>${(product.quantity * product.price).toFixed(2)}</span>
              </div>
              <div className='w-1/4 text-center mr-9'>
                <FaTrashAlt onClick={() => dispatch(removeFromCart(product.id))} className='text-red-700 cursor-pointer' />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='md:col-span-4 bg-black bg-opacity-10 p-6'>
        <h1 className='text-md font-bold bg-slate-100 p-2 text-center'>CART SUMMARY</h1>
        <div className='py-2'>
          <span className='mt-2'>Total Items:</span>
          <span className='pl-2'>{cartItem.totalQuantity}</span>
          <p className='font-bold mt-2'>Shipping</p>
          <p>Shipping to: <span className=''>{address}</span></p>
          <button className='text-blue-600 mt-2' onClick={() => setIsModalOpen(true)}>Change Your Address</button>
        </div>
        <div>
          <span className='font-semibold'>Total Price:</span>
          <span className='pl-2'>${cartItem.totalPrice.toFixed(2)}</span>
        </div>
        <button className='w-full text-white bg-red-700 p-2 mt-4'>
          <Link to="/checkout">Proceed To Checkout</Link>
        </button>
      </div>
      <Modal isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}>
          <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>

        </Modal>
    </div>
  ) : (
    <div className='flex justify-center items-center'>
      <img src={EmptyCart} alt="empty-cart" className='w-84' />
    </div>
  )}
</div>

      
      </div>
      
   

    
  </section>
   </>
  )
}

export default Cart