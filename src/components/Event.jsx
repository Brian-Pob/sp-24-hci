/* eslint-disable react/prop-types */
import { Link } from "@tanstack/react-router";
import { formatDate, formatTime } from "@/lib/utils";

export function Event({ event }) {
	return (
		<Link to={`/events/${event.id}`}>
			<div className="flex flex-col w-full rounded-md overflow-hidden">
				<img
					src={event.image}
					alt=""
					className="object-cover object-center w-full h-80"
				/>
				<div className="p-4">
					<h2 className="text-2xl font-medium">{event.title}</h2>
					<div className="py-4">
						<p className="">{event.description}</p>
						<br />
						<div className="flex flex-row gap-2">
							<svg
								role="presentation"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
							{formatDate(event.date)}
						</div>
						<div className="flex flex-row gap-2">
							<svg
								role="presentation"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
							{formatTime(event.startTime)} - {formatTime(event.endTime)}
						</div>
						<div className="flex flex-row gap-2">
							<svg
								role="presentation"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
							{event.location}
						</div>
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
