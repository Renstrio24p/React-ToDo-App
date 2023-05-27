import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../DataSlicers/todoslicer";

export const Store = configureStore({
    reducer: {
        todo: todoSliceReducer
    }
})