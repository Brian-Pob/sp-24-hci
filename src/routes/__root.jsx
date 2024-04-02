import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
export const Route = createRootRoute({
	component: Root,
});

function Root() {
	const [isAuth] = useAuth();
	return (
		<>
			<main className="flex justify-center items-center flex-col h-[calc(100vh-5rem)] top-0">
				<Outlet />

				<TanStackRouterDevtools position="top-right" />
			</main>
			{isAuth && <Navbar />}
		</>
	);
}
