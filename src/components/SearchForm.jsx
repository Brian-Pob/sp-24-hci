import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export function SearchForm() {
	const navigate = useNavigate({ from: "/search" });
	const form = useForm({
		defaultValues: {
			search: "",
		},
	});

	async function onSubmit(values) {
		console.log(values);
		const params = { values };
		navigate({ to: "/search-results", params });
	}
	return (
		<Form {...form}>
			<form
				className="flex flex-col gap-3"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="search"
					render={({ field }) => (
						<>
							<FormItem>
								<FormLabel>Search</FormLabel>
								<FormControl>
									<Input placeholder="Search" {...field} type="text" />
								</FormControl>
								<FormMessage />
							</FormItem>
						</>
					)}
				/>
				<Button type="submit">Search</Button>
			</form>
		</Form>
	);
}
