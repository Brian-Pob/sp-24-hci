import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Event } from "@/components/event";
export const Route = createFileRoute("/saved")({
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
	component: Saved,
});

async function fetchSavedEvents() {
	const response = await fetch("/api/events.json").then((res) => res.json());

	return response;
}

function Saved() {
	const [savedEvents, setSavedEvents] = useState([]);

	useEffect(() => {
		fetchSavedEvents().then((events) => {
			setSavedEvents(events);
		});
	}, []);

	return (
		<div className="overflow-y-scroll w-full pb-4">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl font-medium p-4">Saved Events</h1>
				<ul className="flex flex-col gap-4 px-4">
					{savedEvents.map((event) => (
						<li key={event.id} className="shadow-lg rounded-lg">
							<Event event={event} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
