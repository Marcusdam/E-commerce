import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({order}) => {
    
    const navigate = useNavigate()
  return (
   <>
    <section className="max-w-[1024px] mx-auto mt-[140px] px-4 lg:px-0">
        <div className='pt-4 '>
            <h2 className='text-xl font-bold'>Thank you for shopping with us</h2>
            <p className='text-gray-500'>Your order has been placedn successfuly you will recieve and email shortly</p>
            <div className='bg-black bg-opacity-10 p-8 mt-8 space-y-4'>
            <div>
                <h3 className='font-semibold'>Your Order Summary</h3>
                <p className='text-gray-500'>Order Number:{order.orderNumber}</p>
            </div>
            <div>
                <h2 className='mt-2 font-semibold'>
                    Your Shipping Information
                </h2>
                <p className='text-gray-500'>{order.shippingInformation.Address}</p>
                <p className='text-gray-500'>{order.shippingInformation.Cty}</p>
                <p className='text-gray-500'>{order.shippingInformation.Zip}</p>
                </div>

                <div>
                    <h2 className='font-semibold'>Products Ordered</h2>
                    <div>
                        {order.product.map((product)=>(
                            <div key={product.id} className='flex justify-between items-center text-gray-500'>
                                <p>{product.name} x {product.quantity}</p>
                                <span>${product.price} * {product.quantity}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between items-center border-t border-b border-gray-400'>
                    <span className='font-semibold'>Total Price:</span>
                    <span  className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
                </div>
                <div className='py-4'>
                    <button className='px-4 py-2 bg-red-600 text-white rounded-md'>Order tracking</button>
                    <button className='px-4 py-2 bg-green-600 text-white ml-4 rounded-md' onClick={()=>navigate('/')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    </section></>
  )
}

export default OrderConfirmation