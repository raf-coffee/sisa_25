import { configureStore } from "@reduxjs/toolkit";
import netWorkConfigReducer from "./ConfigSlice";

export default configureStore({
  reducer: {
    netWorkConfig: netWorkConfigReducer,
  },
});
