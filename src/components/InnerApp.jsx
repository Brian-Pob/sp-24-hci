import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({ routeTree, context: { isAuth: false } });
export function InnerApp() {
	const [isAuth] = useAuth();
	return <RouterProvider router={router} context={{ isAuth }} />;
}
