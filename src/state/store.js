import { configureStore } from "@reduxjs/toolkit";
import { setAccount } from "./accountSlice";

const store = configureStore({
    reducer: { account: setAccount }
})

export default store; 