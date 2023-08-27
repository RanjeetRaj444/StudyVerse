import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Admin_Redux/action";
import BookCard from "../components/Book_Card";
import "../Admin_Style/BooksPage.css";

import { Heading } from "@chakra-ui/react";

// import BooksPage from './BooksPage';
const BooksPage = () => {
	const dispatch = useDispatch();
	const data = useSelector((store) => store.admin_Reducer.data);
	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);
	return (
		<div className="booksCardContainer">
			{data &&
				data.length > 0 &&
				data.map((ele) => <BookCard key={ele._id} ele={ele} />)}
		</div>
	);
};

export default BooksPage;
