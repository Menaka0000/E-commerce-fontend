/**
 author : Menaka Lakshan
 created : 20/07/2023
 */
'use client'
import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItem: null
}

export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers:{
        setSelectedItem:(state,action) => {
            state.selectedItem = action.payload
        }
    }
})
export const {setSelectedItem} = appStateSlice.actions;
export default appStateSlice.reducer;