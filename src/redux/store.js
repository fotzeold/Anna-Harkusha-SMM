import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "../components/Common/Modal/ModalSlice"

export const store = configureStore({
	reducer: {
		modal: modalReducer,
	},
});