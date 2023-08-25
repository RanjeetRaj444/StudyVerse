import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Admin_Redux/action";
const BooksPage = () => {

	const dispatch = useDispatch();
	const data = useSelector((store) => store.admin_Reducer);
	console.log(data);

	useEffect(() => {
		dispatch(getData());
	}, []);
	return <div>
    {/* {data&&data.length>0?<p>hi</p>:"hello"} */}
  </div>;
};

export default BooksPage;
