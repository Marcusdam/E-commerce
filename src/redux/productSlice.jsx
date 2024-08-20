import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],           // All products
    searchTerm: "",         // User's search term
    selectedCategory: "All", // The selected category (e.g., "Men", "Women", etc.)
    priceRange: null,       // Selected price range
    filterData: [] ,         // Filtered products
    sortBy: "popularity"
};

const priceRanges = {
    '10-30': [10, 30],
    '40-80': [30, 80],
    '90-120': [80, 120],
    '130-150': [120, 150]
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload; //To update the products array in the state with the new data.
            state.filterData = action.payload; // To initially show all products before any filters are applied.
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload; //update the searchTerm with the value passed in the action.
            applyFilters(state); //This function is called to filter the products based on the updated searchTerm.
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;  //To update the selectedCategory with the value passed in the action.
            applyFilters(state);
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload;
            applyFilters(state);
        },
        setSortBy(state, action){
            state.sortBy = action.payload;
            applyFilters(state)
        }
    }
});

const applyFilters = (state) => {
    const [minPrice, maxPrice] = state.priceRange ? priceRanges[state.priceRange] : [0, Infinity];
    
    // To create a new filtered array rather than modifying state directly
   let filteredData = state.products.filter(product =>

            (state.selectedCategory === "All" || product.category === state.selectedCategory) &&
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
            product.price >= minPrice &&
            product.price <= maxPrice
        );  

        if(state.sortBy === "priceLowToHigh"){
            filteredData.sort((a,b) => a.price - b.price );
        }
        else if(state.sortBy === "priceHighToLow"){
            filteredData.sort((a,b) => b.price - a.price )
        }
        state.filterData = filteredData
};



export default productSlice.reducer;
export const { setProducts, setSearchTerm, setSelectedCategory, setPriceRange, setSortBy } = productSlice.actions;
