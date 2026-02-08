import {  createSlice} from "@reduxjs/toolkit";

export const loadersSlice =createSlice({name:"loaders"
    ,initialState:{loading:false},
    reducers:{setLoading:(state,action)=>{state.loading=action.payload}}})



    export const {setLoading}=loadersSlice.actions
    export default loadersSlice.reducer