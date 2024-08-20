import React, { useEffect } from 'react'
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { productData } from '../assets/data';

const TopProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector( state => state.product);
  
    useEffect (() =>{
      dispatch(setProducts(productData))
    },[dispatch])
    if(!products || !products.length === 0){
        return <p>Loading shop products....</p>
      }


  return (
   <>
    <section className='py-16'>
        <h2  className='text-4xl font-bold flex justify-center py-4 mt-4'>Top Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.products.slice(0,4).map((product)=>(
            <div key={product.id}>
              <ProductCard product={product}/>
              </div>

          ))}
        </div>
      
    </section>
    </>
  )
}

export default TopProducts