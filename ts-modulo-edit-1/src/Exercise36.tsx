import React from "react";
import Exercise from "./Exercise";

const description =
	"Create a TypeScript 2025 const enum called 'Status' with values 'Pending', 'Approved', and 'Rejected' for better performance";
const solution =
	"const enum Status { Pending = 'PENDING', Approved = 'APPROVED', Rejected = 'REJECTED' }";

const Exercise36: React.FC = () => {
	const enum Status {
		Pending = "PENDING",
		Approved = "APPROVED",
		Rejected = "REJECTED",
	}

	const currentStatus: Status = Status.Pending;
	return (
		<Exercise title="Exercise 36" description={description} solution={solution}>
			Current Status: {currentStatus}
		</Exercise>
	);
};

export default Exercise36;
