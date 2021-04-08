import React, { useState } from "react";
import Madlib from "./Madlib";
import MadlibsForm from "./MadlibsForm";
import { Button } from "reactstrap";

import { v4 as uuid } from "uuid";

const Story = () => {
	const [ items, setItems ] = useState([]);
	const [ hideForm, setHideForm ] = useState(false);

	/* Retrieves values from the Form, shows Madlib and hides the Form. */

	const addItem = (newItem) => {
		setItems((items) => [ ...items, { ...newItem, id: uuid() } ]);
		setHideForm(true);
	};

	/* Restarts an app, shows the Madlib Form again. */

	const restart = () => {
		setHideForm(false);
		setItems([]);
	};

	/* Renders a Form and the Madlib. */

	return (
		<div className="Story-body">
			<h1>Madlibs!</h1>
			{!hideForm && <MadlibsForm addItem={addItem} />}

			<div>
				{items.map(({ id, adj1, adj2, noun, verb }) => (
					<Madlib id={id} adj1={adj1} adj2={adj2} noun={noun} verb={verb} key={id} />
				))}
			</div>

			{hideForm && <Button onClick={restart}>Try again</Button>}
		</div>
	);
};

export default Story;
