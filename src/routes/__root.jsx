import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "@/components/navbar";
import { useAuth } from "@/hooks/useAuth";
export const Route = createRootRoute({
	component: Root,
});

function Root() {
	const [isAuth] = useAuth();
	return (
		<main className="flex justify-center items-center flex-col h-svh p-4">
			<Outlet />
			{isAuth && <Navbar />}

			<TanStackRouterDevtools position="top-right" />
		</main>
	);
}
