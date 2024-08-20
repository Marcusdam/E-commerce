import React from 'react'
import { IoIosClose } from "react-icons/io";

const Modal = ({isModalOpen, setIsModalOpen, children}) => {
    if (!isModalOpen) return null; 
  return (
    <div className='fixed inset-0 bg-slate-800 bg-opacity-75 flex items-center justify-center z-50'>
        <div className='rounded-lg p-6 w-full max-w-md'>

            <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={()=> setIsModalOpen(false)}>
                <IoIosClose/>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal  