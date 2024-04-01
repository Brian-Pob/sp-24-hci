import { createLazyFileRoute } from "@tanstack/react-router";

import { SearchForm } from "../components/SearchForm";

export const Route = createLazyFileRoute("/search")({
	component: () => (
		<div>
			<h1 className="font-medium text-4xl text-center">
				Let&apos;s find something fun!
			</h1>
			<SearchForm />
		</div>
	),
});
