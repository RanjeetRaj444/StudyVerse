import axios from "axios";
import {
	BOOKS_GET_FAILD_ADMIN,
	BOOKS_GET_REQUEST_ADMIN,
	BOOKS_GET_SUCCESS_ADMIN,
} from "./actionTypes";

export const getData = () => (dispatch) => {
	dispatch({ type: BOOKS_GET_REQUEST_ADMIN });
	axios
		.get("http://localhost:8080/books")
		.then((data) => {
			// console.log(data);
			dispatch({ type: BOOKS_GET_SUCCESS_ADMIN, payload: data.data });
		})
		.catch((error) => {
			dispatch({ type: BOOKS_GET_FAILD_ADMIN });
		});
};

export const updateData = () => () => {
	axios.patch();
};

export const deleteData = () => () => {
	axios.delete();
};

export const addData = () => () => {
	axios.post();
};
