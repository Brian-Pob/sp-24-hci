import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Event } from "@/components/Event";
export const Route = createFileRoute("/saved")({
	beforeLoad: async ({ context, location }) => {
		if (!context.isAuth) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: Saved,
});

async function fetchSavedEvents() {
	// Hardcode ids of saved events for now
	const savedEventIds = [
		"e3d9ecb3-a120-415e-94d0-43dcb951da09",
		"28d31180-f45e-401b-b049-f60ca894a7eb",
		"3b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b",
	];
	const allEvents = await fetch("/api/events.json").then((res) => res.json());
	const savedEvents = allEvents.filter((event) =>
		savedEventIds.includes(event.id),
	);

	return savedEvents;
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
				<h1 className="text-4xl font-medium p-4 tracking-tight">
					Saved Events
				</h1>
				<ul className="flex flex-col gap-4 px-4">
					{savedEvents.map((event) => (
						<li key={event.id} className="shadow-xl rounded-lg">
							<Event event={event} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
