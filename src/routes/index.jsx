import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";

function isAuthenticated(){
	// For testing, get ?auth=true in the URL
	return new URLSearchParams(window.location.search).has("auth", "true");
	// return false;
}

export const Route = createFileRoute("/")({
	beforeLoad: async ({ location }) => {
		if (!isAuthenticated()) {
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
		console.log("Authenticated!");
	},
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
		</div>
	);
}