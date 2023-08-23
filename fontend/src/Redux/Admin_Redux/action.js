import axios from "axios";

export const getData = () => () => {
	axios.get();
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
