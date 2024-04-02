/* eslint-disable react/prop-types */
import { Link } from "@tanstack/react-router";

export function Event({ event }) {
	return (
		<Link to={`/events/${event.id}`}>
			<div className="flex flex-col w-full rounded-md overflow-hidden">
				<img
					src={event.image}
					alt=""
					className="object-cover object-center w-full"
					width={300}
					height={175}
				/>
				<div className="p-4">
					<h2 className="text-2xl font-medium">{event.title}</h2>
					<div className="py-4">
						<p className="">{event.description}</p>
						<p>
							{event.date} {event.startTime} - {event.endTime}
						</p>
						<p>{event.location}</p>
					</div>
					<ul className="flex-row flex-wrap flex gap-2">
						{event.tags.map((tag) => (
							<li
								key={tag}
								className="py-1 px-2 bg-zinc-200 rounded-md text-xs font-medium"
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Link>
	);
}
