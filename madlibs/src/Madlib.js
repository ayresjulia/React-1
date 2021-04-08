import React from "react";
import "./Madlib.css";

/* Renders a single Madlib with added values. */

const Madlib = ({ id, adj1, adj2, noun, verb }) => {
	return (
		<div id={id}>
			It was a <span className="Madlib-cursive">{adj1}</span>, cold November day. I woke up to
			the <span className="Madlib-cursive">{adj2}</span> smell of{" "}
			<span className="Madlib-cursive">{noun}</span>{" "}
			<span className="Madlib-cursive">{verb}</span> in the kitchen.
		</div>
	);
};

export default Madlib;
