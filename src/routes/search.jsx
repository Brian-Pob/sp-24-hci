import { createFileRoute } from "@tanstack/react-router";

import { SearchForm } from "@/components/forms/SearchForm";

export const Route = createFileRoute("/search")({
	component: Search,
});

function Search() {
	return (
		<div className="w-full flex flex-col gap-20">
			<div>
				<h1 className="font-medium text-4xl text-center">
					Let&apos;s find something fun!
				</h1>
			</div>
			<div className="p-4">
				<SearchForm />
			</div>
		</div>
	);
}
