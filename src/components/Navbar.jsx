import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="d-flex justify-content-between p-4 ">
			<Link to="/">
				<h3>Haitschool</h3>
			</Link>
			<div className="d-flex">
				<p className="mx-5">coache's</p>
				<p>Learner's</p>
				<p className="mx-5">Book now</p>
			</div>
		</div>
	);
}

export default Navbar;
