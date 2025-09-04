import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const UserPage = (): React.JSX.Element => {
	const params = useParams();
	const [userState, setUserState] = useState<string>("busy");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 3000;
		const url = `http://localhost:${SERVER_PORT}/${params.phoneNumber}`;
		axios
			.get(url)
			.then(function(response) {
				setUserState(response.data.state);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);
	return (
		<div>
			{loading ? (
				"Wait we're asking the guy"
			) : (
				<p>{error ? "Error just happened" : userState}</p>
			)}
		</div>
	);
};
export default UserPage;
