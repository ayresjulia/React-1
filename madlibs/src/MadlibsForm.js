import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./MadlibsForm.css";

const MadlibsForm = ({ addItem }) => {
	const INITIAL_STATE = { adj1: "", adj2: "", noun: "", verb: "" };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	/* Submitting a Madlibs Form. */

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem({ ...formData });
		setFormData(INITIAL_STATE);
	};

	/* Get the values from form inputs. */
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	/* Renders a Madlibs Form. */
	return (
		<Form onSubmit={handleSubmit} className="MadlibsForm">
			<FormGroup>
				<Label htmlFor="adj1" />
				<Input
					required
					id="adj1"
					name="adj1"
					placeholder="first adjective"
					value={formData.adj1}
					onChange={handleChange}
				/>
			</FormGroup>

			<FormGroup>
				<Label htmlFor="adj2" />
				<Input
					required
					id="adj2"
					name="adj2"
					placeholder="second adjective"
					value={formData.adj2}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="noun" />
				<Input
					required
					id="noun"
					name="noun"
					placeholder="noun"
					value={formData.noun}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="verb" />
				<Input
					required
					id="verb"
					name="verb"
					placeholder="verb with -ing"
					value={formData.verb}
					onChange={handleChange}
				/>
			</FormGroup>

			<Button>Play!</Button>
		</Form>
	);
};

export default MadlibsForm;
