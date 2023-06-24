import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/theme-slice";
const store = configureStore({ reducer: themeReducer });
export default store;
