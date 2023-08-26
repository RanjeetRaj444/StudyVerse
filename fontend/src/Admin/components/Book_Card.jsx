import React from "react";
import "../Admin_Style/Book_Card.css";
import { Button, Image, Text } from "@chakra-ui/react";
import { BooksCard } from "./../../Components/BooksCard";
import InputEdit from "./Input_Edit";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../../Redux/Admin_Redux/action";
function BookCard({ ele }) {
	// console.log(ele);
	const dispatch = useDispatch();
	function handleDelete() {
		// console.log(ele._id);
		dispatch(deleteData(ele._id));
		// dispatch(getData());
	}
	return (
		<div className="booksCard">
			<div className="imageContainer">
				<Image
					width="80%"
					borderRadius={"1rem"}
					height={"17rem"}
					src={ele.image}
					alt="err"
				/>
			</div>
			<div className="bookDetail">
				<Text>{ele.title}</Text>
				<Text>{ele.description}</Text>
				<Text>Author:- {ele.author}</Text>
				<InputEdit ele={ele} />
				<Button onClick={handleDelete}>Delete</Button>
			</div>
		</div>
	);
}

export default BookCard;

// author: "Robert Taylor";
// category: "Chemistry";
// chapter: (4)[
// 	("Chapter 1: Quantitative Analysis",
// 	"Chapter 2: Spectroscopy",
// 	"Chapter 3: Quantitative Analysis",
// 	"Chapter 4: Spectroscopy")
// ];
// description: "A comprehensive study of analytical techniques and methods.";
// exercise: (8)[
// 	("Exercise 1: Gravimetric Analysis",
// 	"Exercise 2: UV-Vis Spectroscopy",
// 	"Exercise 3: Gravimetric Analysis",
// 	"Exercise 4: UV-Vis Spectroscopy",
// 	"Exercise 5: Gravimetric Analysis",
// 	"Exercise 6: UV-Vis Spectroscopy",
// 	"Exercise 7: Gravimetric Analysis",
// 	"Exercise 8: UV-Vis Spectroscopy")
// ];
// image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMl90G_rw1mbHbcqu6HRMquCmgwW3OPIgtAjMfmMyymxK_cshqaXCfh7ocONGevuYx87U&usqp=CAU";
// solution: "Solution to Exercise 1: Calculate the percentage of a given component in a mixture.";
// solution_No: 1;
// title: "Analytical Chemistry";
