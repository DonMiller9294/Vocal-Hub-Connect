import React from "react";
const Search = () => (
	<div className="theformplacement">
		<form action="/" method="get">
			<label htmlFor="header-search">
				<span className="visually-hidden"></span>
			</label>
			<input
				type="text"
				id="header-search"
				placeholder="Search Jobs"
				name="s"
			/>
			<button className="btn1" type="submit">
				Search
			</button>
		</form>
	</div>
);

export default Search;
