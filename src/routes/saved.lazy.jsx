import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Event } from "@/components/event";
export const Route = createLazyFileRoute("/saved")({
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
		<div className="overflow-y-scroll w-full">
			<h1 className="text-4xl font-medium">Saved Events</h1>
			<ul>
				{savedEvents.map((event) => (
					<li key={event.id}>
						<Event event={event} />
					</li>
				))}
			</ul>
		</div>
	);
}
