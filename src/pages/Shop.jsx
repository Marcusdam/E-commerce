import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../component/ProductCard";
import { setPriceRange, setSelectedCategory, setSortBy } from "../redux/productSlice";


const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filterData);

  const handleCategoryChange = (category) => {
    console.log(`Selected Category: ${category}`);
    dispatch(setSelectedCategory(category));
  };

  const handlePriceRangeChange = (e) => {
    dispatch(setPriceRange(e.target.value));
  };
  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const resetFilters = () => {
    dispatch(setSelectedCategory('All'));
    dispatch(setPriceRange(''));
    dispatch(setSortBy('popularity'));
  };

  return (
    <section className="lg:mx-[100px] mt-[160px] px-6 lg:px-0">
      {/* <h2 className="text-3xl font-bold flex justify-center mb-4">Our Shop</h2> */}
      
      <div className="flex flex-col md:flex-row gap-4 py-16">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100  shadow-md">
          <h3 className="text-lg font-semibold mb-2">Filter by Category:</h3>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center">
              <input type="radio" name="category" value="All" onChange={() => handleCategoryChange('All')} className="mr-2" />
              All
            </label>
            <label className="flex items-center">
              <input type="radio" name="category" value="Men" onChange={() => handleCategoryChange('Men')} className="mr-2" />
              Men
            </label>
            <label className="flex items-center">
              <input type="radio" name="category" value="Women" onChange={() => handleCategoryChange('Women')} className="mr-2" />
              Women
            </label>
            <label className="flex items-center">
              <input type="radio" name="category" value="Kids" onChange={() => handleCategoryChange('Kids')} className="mr-2" />
              Kids
            </label>
          </div>

          <h3 className="text-lg font-semibold mb-2">Filter by Price Range:</h3>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center">
              <input type="radio" name="priceRange" value="10-30" onChange={handlePriceRangeChange} className="mr-2" />
              $10 - $30
            </label>
            <label className="flex items-center">
              <input type="radio" name="priceRange" value="40-80" onChange={handlePriceRangeChange} className="mr-2" />
              $40 - $80
            </label>
            <label className="flex items-center">
              <input type="radio" name="priceRange" value="90-120" onChange={handlePriceRangeChange} className="mr-2" />
              $90 - $120
            </label>
            <label className="flex items-center">
              <input type="radio" name="priceRange" value="130-150" onChange={handlePriceRangeChange} className="mr-2" />
              $130 - $150
            </label>
          </div>

          <button onClick={resetFilters} className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Reset Filters</button>
        </div>

        {/* Product Grid Section */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl  font-bold font-rubik">Products</h3>
            <div className="ml-2 p-1 rounded-sm" onChange={handleSortChange}>
              <label className="text-sm font-semibold ">Sort by: </label>
              <select className="ml-2 p-1 rounded-md">
                <option value="popularity">Popularity</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
