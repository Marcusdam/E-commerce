import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSelectedCategory } from "../redux/productSlice";


const ProductFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.filterData);
    
    const handleCategoryChange = (category) => {
        dispatch(setSelectedCategory(category));
    };

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            
            <button onClick={() => handleCategoryChange('All')}>All</button>
            <button onClick={() => handleCategoryChange('Men')}>Men</button>
            <button onClick={() => handleCategoryChange('Women')}>Women</button>
            <button onClick={() => handleCategoryChange('Kids')}>Kids</button>

            <div className="flex flex-wrap justify-center gap-3">
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt="" />
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;
