import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosContact, IoIosMenu, IoMdContacts } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Register from "./Register";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [search, setSearch] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  const navRef = useRef(null);
  
  const [nav, setNav] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const HandleClick = () => {
    setNav(!nav);
  };
  const openSignUp = ()=>{
    setIsLogIn(false)
    setIsModalOpen(true)
  }
  const openLogIn = ()=>{
    setIsLogIn(true)
    setIsModalOpen(true)
  }

  const HandleSearch = (e) =>{
    e.preventDefault();
    dispatch(setSearchTerm(search))
    navigate('search-products')

  }
  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
        setNav(false);
    }
};

useEffect(() => {
    if (nav) {
        document.addEventListener('mousedown', handleClickOutside);
    } else {
        document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [nav]);
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white  shadow-md shadow-gray-900 ">
      <div className="lg:mx-[100px] flex justify-between gap-4 items-center px-6 py-5 md:px-10 lg:px-0">
        <Link className="text-2xl font-bold" to="/">
          <span className="text-red-600">Pure</span>Bazaar
        </Link>
        <div className="relative hidden md:block flex-1 mx-4 ">
          <form action="" onSubmit={HandleSearch}>
            <input
              type="text"
              className="border rounded-md w-full h-[30px] p-4 text-black"
              placeholder="Search Products"
              onChange={(e) => setSearch(e.target.value)}
            />
            <CiSearch className=" absolute top-2 right-3 text-black" />
          </form>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="relative">
            <Link to='cart-items'>
              <BsCart size={24} />
             
                {products.length > 0  && ( <span className="absolute top-1 left-1 w-3 px-2 text-[10px] flex justify-center items-center bg-red-600 font-bold rounded-full ">
                  {products.length}
                  </span> ) }
            </Link>
          </div>
          
          <button className="hidden md:block" onClick={openLogIn}>Login | Register</button>
          <button className="block md:hidden" onClick={openLogIn}> 
            <IoMdContacts size={35} />
          </button>

          <div onClick={HandleClick} className="block md:hidden " ref={navRef}>
            {nav ? <IoCloseOutline size={45} /> : <IoIosMenu size={45} />}
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed top-[80px] pt-10 left-0 w-[50%] h-full bg-black text-white md:hidden">
          <div className="flex flex-col pl-8 space-y-6">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="shop">Shop</Link>
            <Link to="contact">Contact</Link>
          </div>
          <div className="absolute bottom-10  pb-16 pl-8 ">
            <div className="flex items-center gap-2">
              <IoIosContact size={45} />
              <h1>Marcus Jane</h1>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex justify-center items-center gap-8 pb-3">
        <Link
          to="/"
          className=" relative group transition-colors duration-300 ease-in-out flex justify-center items-center px-2 py-2 text-gray-400 hover:text-orange-500"
        >
          <span className="relative z-10">Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="about"
          className=" relative group transition-colors duration-300 ease-in-out flex justify-center items-center px-2 py-2 text-gray-400 hover:text-orange-500"
        >
          <span className="relative z-10">About</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="shop"
          className=" relative group transition-colors duration-300 ease-in-out flex justify-center items-center px-2 py-2 text-gray-400 hover:text-orange-500"
        >
          <span className="relative z-10">Shop</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          to="contact"
          className=" relative group transition-colors duration-300 ease-in-out flex justify-center items-center px-2 py-2 text-gray-400 hover:text-orange-500"
        >
          <span className="relative z-10">Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogIn ?  <Login openSignUp={openSignUp}/> : <Register openLogIn={openLogIn}/>}
      </Modal>
    </nav>
    </>
  );
};

export default Navbar;
