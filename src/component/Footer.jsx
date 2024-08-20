import React from 'react'
import { FaCcMastercard, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Mastercard from  "../assets/images/master-card.png"
import PayPal from  "../assets/images/PayPal.png"
import Visa from  "../assets/images/Visa.png"

const Footer = () => {
  return (
    <>
    <section className="bg-black text-white mt-20 pt-10">
      <div className='lg:mx-[100px] px-6 py-10 lg:px-0 '>
      <div className='grid  md:grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className="flex flex-col md:flex-row item-center gap-8">
          <div>
          <h3 className='font-bold text-lg mb-4'>Follow</h3>
          <div className="flex items-center gap-4 mb-4">
          <a href="#" className="text-blue-600 text-2xl"><FaFacebook/><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-400 text-2xl"><FaTwitter/><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-pink-600 text-2xl"><FaInstagram/><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-blue-700 text-2xl"><FaLinkedin/><i className="fab fa-linkedin"></i></a>
          </div>
          <div className=' pt-4 flex items-center gap-10  '>
          <div className='flex flex-col'>
            
        <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:underline">Autum</a></li>
        <li><a href="#" class="hover:underline">Spring</a></li>
        <li><a href="#" class="hover:underline">Summer</a></li>
      </ul>
              
            </div>
       <div>
       <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:underline">Casual</a></li>
        <li><a href="#" class="hover:underline">Classic</a></li>
        <li><a href="#" class="hover:underline">Urban</a></li>
      </ul>
       </div>
          </div>
          <div>
          </div>
            
          </div>
          <div className=''>
          <div>
      <h2 class="font-bold text-lg mb-4">Customer Service</h2>
      <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:underline">Contact Us</a></li>
        <li><a href="#" class="hover:underline">FAQ</a></li>
        <li><a href="#" class="hover:underline">Shipping & Returns</a></li>
        <li><a href="#" class="hover:underline">Order Tracking</a></li>
      </ul>
    </div>
    
          </div>
          <div>
      <h2 class="font-bold text-lg mb-4">Useful Links</h2>
      <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        <li><a href="#" class="hover:underline">Terms of Service</a></li>
        <li><a href="#" class="hover:underline">Affiliate Program</a></li>
        <li><a href="#" class="hover:underline">Careers</a></li>
      </ul>
    </div>
          
        </div>
        <div className="">
          <div className="flex items-center gap-2 mb-4">
          <a href="" className='hover:text-orange-600'>NEW ARRIVALS</a>
            <a href="" className='hover:text-orange-600'>DISCOUNTS</a>
            <a href="" className='hover:text-orange-600'>CONTACT US</a>
          </div>
          <div>
          <p>Subscribe to get the latest on sales new releases and more</p>
          <div className="flex items-center gap-4 ">
          <input type="text" className='mt-4 p-2 w-full  md:w-80 rounded-full'/>
          <button className='py-2 px-8 mt-4 bg-red-600 rounded-full hover:bg-red-500'>Subscribe</button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 w-full  md:w-80 mt-6 px-4 py-2 rounded-md bg-white">
        
          <img src={Visa} alt="visa" className='w-20'/>
          <img src={Mastercard} alt="mastercard" className='w-20'/>
          <img src={PayPal} alt="paypal" className='w-20'/>

        </div>
        </div>
        

      </div>
      </div>
    </section>
    </>
  )
}

export default Footer