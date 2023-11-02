import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchAllSuppliers = createAsyncThunk("suppliers/getAll", () => {
    return axios.get('https://northwind.vercel.app/api/suppliers')
        .then(res => res.data)
        
})


let initialState = {
    suppliers: [],
    loading: false,
    error: ''
}



const supplierSlice = createSlice({
    name: "supplier",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.suppliers.push(action.payload)
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchAllSuppliers.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.suppliers = []
        })

        builder.addCase(fetchAllSuppliers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.suppliers = action.payload
        })

        builder.addCase(fetchAllSuppliers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.suppliers = []
        })
    }
})


export default supplierSlice.reducer