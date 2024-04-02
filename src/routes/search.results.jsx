import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search/results")({
	component: SearchResults,
});

function SearchResults() {
	const { searchText, searchTags, searchFilters } = Route.useSearch();
	return (
		<div>
			Hello /search-results!
			<p>searchText: {searchText}</p>
			<p>searchTags: {searchTags}</p>
			<p>searchFilters: {searchFilters}</p>
		</div>
	);
}
