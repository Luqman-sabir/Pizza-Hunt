import { configureStore } from '@reduxjs/toolkit'
import CardSlice from './slices/cardSlice';
import CategorySlice from "./slices/CategorySlice"
const store = configureStore({
    reducer:{
        cart:CardSlice,
        category:CategorySlice,
    }
});
export default store;