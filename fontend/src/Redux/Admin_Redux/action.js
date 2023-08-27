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

export const updateData = (id, data) => (dispatch) => {
	axios.patch(`http://localhost:8080/books/update/${id}`, data).then((data) => {
		// console.log("data is deleted.");
		dispatch(getData());
	});
};

export const deleteData = (id) => (dispatch) => {
	console.log(id);
	axios.delete(`http://localhost:8080/books/delete/${id}`).then((data) => {
		// console.log("data is deleted.");
		dispatch(getData());
	});
};

export const addData = (data) => (dispatch) => {
	axios.post(`http://localhost:8080/books/add`, data).then((added) => {
		dispatch(getData());
	});
};


