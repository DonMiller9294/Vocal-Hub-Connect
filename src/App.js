import React from "react";
import "./App.css";
import TheNav from "./TheNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Search from "./search";
import Profile1 from "./Profile1";

function App() {
	return (
		<div className="App">
			<TheNav />
			<Heading />
			<Search />
			<Profile1 />
		</div>
	);
}

export default App;
