import { createFileRoute } from "@tanstack/react-router";
import { Event } from "@/components/event";
export const Route = createFileRoute("/search/results")({
	loaderDeps: ({ search: { searchText } }) => ({ searchText }),
	loader: async ({ deps: { searchText } }) =>
		fetchSearchResults({ searchText }),
	component: SearchResults,
});

async function fetchSearchResults({ searchText }) {
	const allEvents = await fetch("/api/events.json").then((res) => res.json());
	const searchResults = allEvents.filter((event) =>
		event.title.toLowerCase().includes(searchText),
	);
	return { searchResults };
}

function SearchResults() {
	// const { searchTags, searchFilters } = Route.useSearch();
	const { searchText } = Route.useLoaderDeps();
	const { searchResults } = Route.useLoaderData();
	return (
		<div className="overflow-y-scroll w-full pb-4">
			<h1 className="text-4xl font-medium p-4">
				Events matching &quot;{searchText}&quot;
			</h1>
			<ul className="flex flex-col gap-4 px-4">
				{searchResults.map((event) => (
					<li key={event.id} className="shadow-lg rounded-lg">
						<Event event={event} />
					</li>
				))}
			</ul>
		</div>
	);
}
