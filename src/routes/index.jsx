import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import { Navigate } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
	beforeLoad: async ({ context, location }) => {
		if (!context.isAuth) {
			throw redirect({
				to: "/login",
				search: {
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
