import {
	BOOKS_GET_FAILD_ADMIN,
	BOOKS_GET_REQUEST_ADMIN,
	BOOKS_GET_SUCCESS_ADMIN,
} from "./actionTypes";

const InitialState = {
	data: {},
	isLoading: false,
	isError: false,
};

export const reducer = (state = InitialState, action) => {
	// console.log(payload);
	switch (action.type) {
		case BOOKS_GET_FAILD_ADMIN:
			// console.log("hhh");
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case BOOKS_GET_SUCCESS_ADMIN:
			// console.log("hello");
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case BOOKS_GET_REQUEST_ADMIN:
			// console.log("hi");
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		default:
			return state;
	}
};
