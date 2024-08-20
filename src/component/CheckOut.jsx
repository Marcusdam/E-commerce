import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CheckOut = ({setOrder}) => {
  const [toggleBilling, setToggleBilling] = useState(false);
  const [toggleShipping, setToggleShipping] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate()
  
  const cart = useSelector(state=> state.cart)

  const[shippingInfo, setShippingInfo] = useState({
    Address: "",
    City: "", 
    ZIP: "",

  })

  const handleBillingClick = () => {
    setToggleBilling(!toggleBilling);
  };
  const handleShippingClick = () => {
    setToggleShipping(!toggleShipping);
  };
  const handlePaymentClick = () => {
    setTogglePayment(!togglePayment);
  };
  const handleOrder =() =>{
    const newOrder = {
        product : cart.products ,
        orderNumber: '1234',
        shippingInformation: shippingInfo,
        totalPrice: cart.totalPrice

    }

    setOrder(newOrder)
    console.log(newOrder)
    navigate('/order-confirmation')

  }

  return (
    <section className="max-w-[1024px] mx-auto mt-[160px] px-4 lg:px-0">
      <div className="grid md:grid-cols-12 gap-6">
        <div className=" shadow-lg p-4 col-span-8 border">
          <h1 className="text-2xl sm:text-2xl font-semibold font-rubik mb-4">
            Check out Your Items
          </h1>
          <div className="border">
            <button
              className="flex justify-between items-center w-full bg-gray-50"
              onClick={handleBillingClick}
            >
              <h2 className="font-semibold p-2">Billing Information</h2>
              <span className="mr-4">
                {toggleBilling ? <FaAngleUp /> : <FaAngleDown />}{" "}
              </span>
            </button>
            {toggleBilling && (
              <div>
                <form action="" className="space-y-2 p-2">
                  <div className="flex flex-col">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full p-2 border "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full p-2 border "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="phone"
                      placeholder="Enter Your Phone Number"
                      className="w-full p-2 border "
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="mt-4 border">
            <button
              className="flex justify-between items-center w-full bg-slate-50"
              onClick={handleShippingClick}
            >
              <h2 className="font-semibold p-2">Shipping Information</h2>
              <span className="mr-4">
                {toggleBilling ? <FaAngleUp /> : <FaAngleDown />}{" "}
              </span>
            </button>
            {toggleShipping && (
              <div>
                <form action="" className="space-y-2 p-2">
                  <div className="flex flex-col">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      onChange={(e) =>setShippingInfo({...shippingInfo, Address: e.target.value})}
                      className="w-full p-2 border "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">City</label>
                    <input
                      type="text"
                      placeholder="Enter Your City"
                      onChange={(e) =>setShippingInfo({...shippingInfo, City: e.target.value})}
                      className="w-full p-2 border "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">ZIP code</label>
                    <input
                      type="text"
                      placeholder="Enter Your Phone ZIP Code"
                      onChange={(e) =>setShippingInfo({...shippingInfo, ZIP: e.target.value})}
                      className="w-full p-2 border "
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="mt-4 border">
            <button
              className="flex justify-between items-center w-full bg-slate-50"
              onClick={handlePaymentClick}
            >
              <h2 className="font-semibold p-2">Payment Information</h2>
              <span className="mr-4">
                {togglePayment ? <FaAngleUp /> : <FaAngleDown />}{" "}
              </span>
            </button>
            {togglePayment && (
              <div >
                <div className="ml-2 py-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")} 
                    className="cursor-pointer"
                  />
                  <label htmlFor="" className="ml-2 cup">Cash on delivery</label>
                </div>
                <div className="ml-2 py-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                    className="cursor-pointer"
                  />
                  <label htmlFor="" className="ml-2">Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div>
                    <div className="bg-black bg-opacity-10 mt-4 space-y-4 p-8">
                      <h1 className="text-2xl font-rubik font-semibold">Card Information</h1>
                      <div>
                        <label htmlFor="" className="mb-4">Card Number</label>
                        <input type="text" placeholder="Enter Card Number" className="w-full p-2 rounded-md"/>
                      </div>
                      <div>
                        <label htmlFor="" className="mb-4">Card Name</label>
                        <input type="text" placeholder="Enter Card Number" className="w-full p-2 rounded-md"/>
                      </div>
                      <div>
                        <label htmlFor="" className="mb-4">Card Number</label>
                        <input type="text" placeholder="Enter Card Name" className="w-full p-2 rounded-md"/>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                        <label htmlFor="" className="mb-4">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full p-2 rounded-md"/>
                        </div>
                        <div>
                          <label htmlFor="" className="mb-4">CVV</label>
                          <input type="text" placeholder="CVV" className="w-full p-2 rounded-md"/>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-4 p-4 border shadow-lg">
          <h3 className="text-2xl font-semibold font-rubik">Order Details</h3>
          <div>
            {cart.products.map((product) =>(
                <div key={product.id} className="flex justify-between items-center">
                    <img src={product.image} alt={product.name} className="w-16"/>
                    <div >
                    <h4 className="font-semibold">{product.name}</h4>
                    <p className="text-gray-600">${product.price}  x {product.quantity}</p>
                    </div>
                    <div>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))}
          </div>
          <div>
          <div className="flex justify-between items-center border-t-2 border-b-2 py-4 mt-4">
            <span className="font-semibold ">Total Price:</span>
            <span className="pl-2 font-semibold">${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-600 mt-4 px-4 py-2 text-xl text-white " onClick={() =>handleOrder(navigate)}>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
