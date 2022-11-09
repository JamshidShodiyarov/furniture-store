import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
	totalQuantity: 0,
	totalAmond: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const findProduct = state.cartItem.findIndex((item) => item.id === action.payload.id);
			if (findProduct >= 0) {
				state.cartItem[findProduct].count += 1;
			} else {
				const temp = { ...action.payload, count: 1 };
				state.cartItem.push(temp);
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItem));
		},
		minToCart(state, action) {
			const findProduct = state.cartItem.find((item) => item.id === action.payload);
			findProduct.count -= 1;
			localStorage.setItem('cart', JSON.stringify(state.cartItem));
		},
		removeToCart(state, action) {
			state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
			localStorage.setItem('cart', JSON.stringify(state.cartItem));
		},
		clearToCart(state) {
			state.cartItem = [];
			localStorage.removeItem('cart');
		},
		setGetTotals(state) {
			state.totalQuantity = state.cartItem.reduce((sum, obj) => {
				return sum + obj.count;
			}, 0);
			state.totalAmond = state.cartItem.reduce((sum, obj) => {
				return sum + obj.count * obj.price;
			}, 0);
		},
	},
});

export const { addToCart, setGetTotals, minToCart, removeToCart, clearToCart } = cartSlice.actions;

export default cartSlice.reducer;
