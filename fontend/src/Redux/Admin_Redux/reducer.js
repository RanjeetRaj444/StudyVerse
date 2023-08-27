import {
	BOOKS_GET_FAILD_ADMIN,
	BOOKS_GET_REQUEST_ADMIN,
	BOOKS_GET_SUCCESS_ADMIN,
} from "./actionTypes";

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BOOKS_GET_SUCCESS_ADMIN:
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case BOOKS_GET_REQUEST_ADMIN:
			// console.log(action.type);
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case BOOKS_GET_FAILD_ADMIN:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};
