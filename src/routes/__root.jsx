import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from '@/components/navbar';
export const Route = createRootRoute({
	component: () => (
		<>
			<hr />
			<Outlet />
			<Navbar />
		

			<TanStackRouterDevtools position='top-right'/>
		</>
	),
});
