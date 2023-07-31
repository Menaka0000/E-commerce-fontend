/**
 author : Menaka Lakshan
 created : 20/07/2023
 */
'use client'
import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './features/appStateSlice'

export const store = configureStore({
    reducer: {
        appState: appStateReducer
    },
})