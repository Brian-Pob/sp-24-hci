import { SearchForm } from "@/components/forms/SearchForm";
import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/search/")({
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
	component: Search,
});

export function Search() {
	return (
		<div className="w-full flex flex-col gap-20 p-4 max-w-3xl">
			<div>
				<h1 className="font-medium text-4xl text-center">
					Let&apos;s find something fun!
				</h1>
			</div>
			<div className="">
				<SearchForm />
			</div>
		</div>
	);
}
