import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "@/components/navbar";
export const Route = createRootRoute({
	component: () => {
		function isAuthenticated() {
			return false;
		}
		return (
			<main className="flex justify-center items-center flex-col h-svh p-4">
				<Outlet />
				{isAuthenticated() && <Navbar />}

				<TanStackRouterDevtools position="top-right" />
			</main>
		);
	},
});
