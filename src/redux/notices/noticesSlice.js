import { createSlice } from "@reduxjs/toolkit";
import * as noticesOperations from './noticesOperations';

const initialState = {
    notices: [],
    
}

const noticesSlice = createSlice({
    name: 'notices',

})