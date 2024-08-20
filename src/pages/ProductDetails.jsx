import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity } from '../redux/cartSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const cartItems = useSelector(state => state.cart.products);

    const [productDetail, setProductDetail] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (productDetail) {
            dispatch(addToCart(productDetail));
            setAlertMessage('New item added successfully');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
    };

    const currentQuantity = cartItems.find(item => item.id === parseInt(id))?.quantity || 0;

    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id));
        setProductDetail(newProduct);
    }, [id, products]);

    return (
        <>
            <section className='max-w-[1024px] mx-auto mt-20 pt-[80px] px-6 lg:px-0'>
                <div>
                    {productDetail ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                            <div className='border p-4 shadow-lg w-full h-auto md:h-96'>
                                <img src={productDetail.image} alt={productDetail.name} className='w-[250px] mx-auto' />
                            </div>

                            <div className='border py-8 shadow-lg max-w-md w-full text-center'>
                                <h2 className='text-3xl font-rubik font-semibold mb-4'>{productDetail.name}</h2>
                                <p className='max-w-xs mx-auto mb-2'>{productDetail.description}</p>
                                <p className='max-w-xs mx-auto mb-4 text-green-600'>{productDetail.availability}</p>
                                <span className='text-2xl text-gray-600 mb-4 block'>${productDetail.price}</span>
                                <div className='flex justify-center items-center space-x-4 mb-6'>
                                    <button
                                        className='px-3 py-1 bg-gray-200 rounded-full'
                                        onClick={() => dispatch(decreaseQuantity(productDetail.id))}
                                    >
                                        -
                                    </button>
                                    <span className='text-black'>{currentQuantity}</span>
                                    <button
                                        className='px-3 py-1 bg-gray-200 rounded-full'
                                        onClick={() => dispatch(increaseQuantity(productDetail.id))}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className='px-6 py-2 text-lg bg-red-600 text-white rounded-full hover:bg-red-500 transition-all cursor-pointer'
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p>Loading...</p>
                        </div>
                    )}
                </div>
            </section>

            {showAlert && (
                <div className='fixed top-5 right-5 z-50'>
                    <div className='bg-white bg-opacity-85 border-b-2 border-red-600  py-2 px-4 shadow-sm shadow-green-700'>
                        {alertMessage}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
