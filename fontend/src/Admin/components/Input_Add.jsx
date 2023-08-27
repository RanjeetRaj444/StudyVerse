import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../Redux/Admin_Redux/action";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Input,
	Textarea,
	Select,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
const InputAdd = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	function handleClick() {
		onOpen();
		// dispatch(addData(data));
	}
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addData(data));
	}
	function handleChange(e) {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	return (
		<>
			<Button onClick={handleClick}>Add</Button>

			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Data</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<DIV onSubmit={handleSubmit} action="">
							<lebale>Image Link</lebale>
							<Input
								type="text"
								name="image"
								placeholder="Image Link"
								onChange={handleChange}
								// value={data.image}
							/>
							<lebale>Title</lebale>
							<Input
								type="text"
								name="title"
								placeholder="Unique Title"
								onChange={handleChange}
								// value={data.title}
							/>
							<lebale>Solution</lebale>
							<Input
								type="text"
								name="solution"
								placeholder="Add Solution"
								onChange={handleChange}
								// value={data.solution}
							/>
							<lebale>Description</lebale>
							<Textarea
								type="text"
								name="description"
								placeholder="Add a Description"
								onChange={handleChange}
								// value={data.description}
							/>
							<lebale>Author</lebale>
							<Input
								type="text"
								name="author"
								placeholder="Author"
								onChange={handleChange}
								// value={data.author}
							/>
							<lebale>Category</lebale>
							<Select onChange={handleChange} name="category" id="">
								<option value="">Select Category</option>
								<option value="Business">Business</option>
								<option value="Languages">Languages</option>
								<option value="Biology">Biology</option>
								<option value="Physics">Physics</option>
								<option value="Linear Algebra">Linear Algebra</option>
								<option value="Engineering">Engineering</option>
								<option value="Calculus">Calculus</option>
								<option value="Chemistry">Chemistry</option>
							</Select>
							<Input type="submit" />
						</DIV>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

const DIV = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export default InputAdd;

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
