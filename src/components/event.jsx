/* eslint-disable react/prop-types */
export function Event({ event }) {
	return (
		<div className="flex flex-col w-full">
			<img src={event.image} alt="" width={400} height={300} />
			<h2 className="text-2xl font-medium">{event.title}</h2>
			<p>{event.description}</p>
			<p>
				{event.date} {event.startTime} - {event.endTime}
			</p>
			<p>{event.location}</p>
		</div>
	);
}
