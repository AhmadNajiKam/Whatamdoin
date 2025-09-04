import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/:phoneNumber" element={<UserPage />} />
		</Routes>
	</BrowserRouter>,
);
