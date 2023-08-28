import axios from "axios";
import {
	BOOKS_GET_FAILD_ADMIN,
	BOOKS_GET_REQUEST_ADMIN,
	BOOKS_GET_SUCCESS_ADMIN,
} from "./actionTypes";

export const getData = () => (dispatch) => {
	dispatch({ type: BOOKS_GET_REQUEST_ADMIN });
	axios
		.get("https://studyverse-drgj.onrender.com/books")
		.then((data) => {
			// console.log(data);
			dispatch({ type: BOOKS_GET_SUCCESS_ADMIN, payload: data.data });
		})
		.catch((error) => {
			dispatch({ type: BOOKS_GET_FAILD_ADMIN });
		});
};

export const updateData = (id, data) => (dispatch) => {
	axios.patch(`https://studyverse-drgj.onrender.com/books/update/${id}`, data).then((data) => {
		// console.log("data is deleted.");
		dispatch(getData());
	});
};

export const deleteData = (id) => (dispatch) => {
	console.log(id);
	axios.delete(`https://studyverse-drgj.onrender.com/books/delete/${id}`).then((data) => {

		// console.log("data is deleted.");
		dispatch(getData());

	});
};

export const addData = (data) => (dispatch) => {
	axios.post(`https://studyverse-drgj.onrender.com/books/add`, data).then((added) => {
		dispatch(getData());
	});
};


