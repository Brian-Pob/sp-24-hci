import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { InnerApp } from "@/components/InnerApp";
import "./index.css";

const rootElement = document.getElementById("app");
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<InnerApp />
		</StrictMode>,
	);
}
