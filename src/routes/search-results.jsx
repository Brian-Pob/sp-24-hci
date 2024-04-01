import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search-results")({
	beforeLoad: ({ search }) => {
		console.log(search);
	},
	component: ({ search }) => (
		<div>
			Hello /search-results!
			<pre>{search}</pre>
		</div>
	),
});
