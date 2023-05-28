import { configureStore } from "@reduxjs/toolkit";
import Slicer from '../slicers/Slicer'

export const Store = configureStore({
    reducer: {
        todo: Slicer
    },
})