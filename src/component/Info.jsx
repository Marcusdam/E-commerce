import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md"
import { FaGlobe } from 'react-icons/fa';

const Info = () => {
    const infoData = [
        {
            icon: <MdOutlineLocalShipping className=' text-red-600 ' size={40} />,
            title: 'Free Shipping',
            desc: "We're thrilled to offer free shipping on every order, no matter how big or small. Enjoy fast delivery right to your doorstep without any additional costs."
        },
        {
            icon: <BiSupport className=' text-blue-600 ' size={40} />,
            title: 'Support 24/7',
            desc: 'Our customer support team is available around the clock to assist you with any questions or concerns. Whether you need help with your order or have a product inquiry, we are here for you.'
        },
        {
            icon: <IoLockClosedOutline className=' text-green-600 ' size={40} />,
            title: 'Payment Secure',
            desc: "Shop with confidence knowing that your transactions are secure and your satisfaction is guaranteed. Our advanced security measures ensure your personal information is protected at all times."
        },
        {
            icon: <MdOutlineDiscount className=' text-yellow-600 ' size={40} />,
            title: 'Discount',
            desc: "Keep an eye out for our limited-time discounts and save big on your favorite products. Sign up for our newsletter to receive exclusive offers and be the first to know about upcoming sales."
        },
        {
            icon: <IoMdReturnLeft className=' text-orange-600 ' size={40} />,
            title: 'Easy Returns',
            desc: "Enjoy hassle-free returns within 30 days of purchase for a full refund or exchange. If you're not completely satisfied with your purchase, simply return it and we'll take care of the rest."
        },
        {
            icon: <FaGlobe className=' text-blue-600 ' size={40} />,
            title: 'Global Shipping',
            desc: "We offer international shipping to over 100 countries, bringing our products to you wherever you are. No matter where you live, you can enjoy our high-quality products delivered right to your door."
        }

    ]
  return (
    <section className=' w-full mt-20 py-16'>
        <h2 className='text-4xl font-bold font-rubik flex justify-center items-center'>OUR SERVICES</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {infoData.map((data, index) =>(
            <div key={index} className='p-12  md:p-6 leading-3 shadow-md w-full h-full text-justify mt-10 border-2 border-gray-100 rounded-xl '>
                <div className='flex justify-center py-4'>{data.icon}</div>
                <h1 className='text-[22px] text-center text-gray-500 pt-2 font-bold'>{data.title}</h1>
                <p className='leading-5 pt-4 text-gray-500'>{data.desc}</p>
            </div>

        ))
        }
        </div>
        
    </section>
  )
}

export default Info