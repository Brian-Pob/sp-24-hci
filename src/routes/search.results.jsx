import { createFileRoute } from "@tanstack/react-router";
import { Event } from "@/components/Event";
import { redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/search/results")({
	beforeLoad: async ({ context, location }) => {
		if (!context.isAuth) {
			throw redirect({
				to: "/login",
				search: {
					// Use the current location to power a redirect after login
					// (Do not use `router.state.resolvedLocation` as it can
					// potentially lag behind the actual current location)
					redirect: location.href,
				},
			});
		}
	},
	loaderDeps: ({ search: { searchText } }) => ({ searchText }),
	loader: async ({ deps: { searchText } }) =>
		fetchSearchResults({ searchText }),
	component: SearchResults,
});

async function fetchSearchResults({ searchText }) {
	const allEvents = await fetch("/api/events.json").then((res) => res.json());
	const searchResults = allEvents.filter((event) =>
		event.title.toLowerCase().includes(searchText.toLowerCase()),
	);
	return { searchResults };
}

function SearchResults() {
	// const { searchTags, searchFilters } = Route.useSearch();
	const { searchText } = Route.useLoaderDeps();
	const { searchResults } = Route.useLoaderData();
	return (
		<div className="overflow-y-scroll w-full pb-4">
			<div className="max-w-3xl mx-auto">
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
		</div>
	);
}
