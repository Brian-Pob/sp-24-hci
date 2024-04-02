import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Navbar() {
	return (
		<nav className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 h-20">
			<div className="grid grid-flow-col justify-evenly h-full max-w-lg  mx-auto font-medium py-2">
				<Link
					to="/search"
					className={cn(
						"inline-flex flex-col items-center justify-center p-2  group border-b-2 border-transparent dark:border-transparent data-[status=active]:border-b-slate-600",
					)}
				>
					<svg
						className="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeWidth="2"
							d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
						/>
					</svg>
					<span className="text-sm text-gray-500 dark:text-gray-400 ">
						Search
					</span>
				</Link>
				<Link
					to="/create"
					className={cn(
						"inline-flex flex-col items-center justify-center p-2 group border-b-2 border-transparent dark:border-transparent data-[status=active]:border-b-slate-600",
					)}
				>
					<svg
						className="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>

					<span className="text-sm text-gray-500 dark:text-gray-400 ">
						Create
					</span>
				</Link>
				<Link
					to="/saved"
					className={cn(
						"inline-flex flex-col items-center justify-center p-2  group border-b-2 border-b-transparent dark:border-b-transparent data-[status=active]:border-b-slate-600",
					)}
				>
					<svg
						className="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
						/>
					</svg>

					<span className="text-sm text-gray-500 dark:text-gray-400 ">
						Saved
					</span>
				</Link>
			</div>
		</nav>
	);
}
