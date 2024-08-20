import React from 'react'
import { ProductCard } from '../component/ProductCard'
import { useSelector } from 'react-redux'
import  NoProduct from  "../assets/images/no-product.png"

const SearchProducts = () => {
    const filterProducts = useSelector(state => state.product.filterData)
    console.log(filterProducts)
  return (
    <>
    <section className="max-w-[1024px] mx-auto mt-20 pt-[80px] px-2 lg:px-0">
        {filterProducts.length > 0 ? 
        
    <div>
            <h2 className="text-4xl font-bold flex justify-center py-4"> Our Shop</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {filterProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
        </div>  :  
        
        <div className='flex justify-center items-center'>
            <img src={NoProduct} alt="no product" />
            </div>}
      
    </section>
    </>
    
  )
}

export default SearchProducts