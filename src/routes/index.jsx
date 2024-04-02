import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import { Navigate } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
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
		throw redirect({
			to: "/search",
		});
	},
	component: Index,
});

function Index() {
	return <Navigate to="/search" />;
}
