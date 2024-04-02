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
			searchText: "",
			searchTags: "",
			searchFilters: "",
		},
		mode: "onChange",
	});

	async function onSubmit(values) {
		console.log(values);
		navigate({ to: "/search/results", search: values });
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-3"
			>
				<FormField
					control={form.control}
					name="searchText"
					render={({ field }) => (
						<>
							<FormItem>
								<FormLabel>search</FormLabel>
								<FormControl>
									<Input
										placeholder="cooking, baking, etc."
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</>
					)}
				/>
				<div className="grid grid-flow-col gap-2">
					<FormField
						control={form.control}
						name="searchTags"
						render={({ field }) => (
							<>
								<FormItem>
									<FormLabel>tags</FormLabel>
									<FormControl>
										<Input placeholder="tags" {...field} type="text" />
									</FormControl>
									<FormMessage />
								</FormItem>
							</>
						)}
					/>
					<FormField
						control={form.control}
						name="searchFilters"
						render={({ field }) => (
							<>
								<FormItem>
									<FormLabel>filters</FormLabel>
									<FormControl>
										<Input placeholder="filters" {...field} type="text" />
									</FormControl>
									<FormMessage />
								</FormItem>
							</>
						)}
					/>
				</div>

				<Button type="submit">Search</Button>
			</form>
		</Form>
	);
}
