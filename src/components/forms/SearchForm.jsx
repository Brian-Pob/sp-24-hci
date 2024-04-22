import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useState } from "react";
import { DateTimePicker } from "../DateTimePicker";

export function SearchForm() {
	const navigate = useNavigate({ from: "/search" });

	const form = useForm({
		defaultValues: {
			searchText: "",
			searchTags: [],
			// searchFilters: "",
			filterByDate: false,
			dateStart: new Date(),
			dateEnd: new Date(),
		},
		mode: "onChange",
	});

	async function onSubmit(values) {
		console.log(values);

		navigate({ to: "/search/results", search: values });
	}

	const exampleTags = ["music", "coding", "math"];
	const [showDatePickers, setShowDatePickers] = useState(false);
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
				<div className="grid sm:grid-cols-2 gap-2 ">
					<FormField
						className=""
						control={form.control}
						name="items"
						render={() => (
							<FormItem className="overflow-hidden">
								<div className="-mb-8">
									<FormLabel className="text-base">Popular Tags</FormLabel>
								</div>
								<div className="flex flex-row overflow-x-auto pt-8 pb-4 gap-4 relative">
									{exampleTags.map((tag) => (
										<FormField
											key={tag}
											control={form.control}
											name="searchTags"
											render={({ field }) => {
												return (
													<FormItem
														key={tag}
														className="flex flex-row items-start space-x-1 space-y-0"
													>
														<FormControl>
															<Checkbox
																checked={field.value?.includes(tag)}
																onCheckedChange={(checked) => {
																	return checked
																		? field.onChange([...field.value, tag])
																		: field.onChange(
																				field.value?.filter(
																					(value) => value !== tag,
																				),
																			);
																}}
															/>
														</FormControl>
														<FormLabel className="font-normal">{tag}</FormLabel>
													</FormItem>
												);
											}}
										/>
									))}
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>

					<FormLabel className='text-base'>Filters</FormLabel>
					<FormField
						control={form.control}
						name="filterByDate"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={(checked) => {
											field.onChange(checked);
											setShowDatePickers(checked);
										}}
									/>
								</FormControl>
								<FormLabel className="mt-0 font-normal">Filter by Date</FormLabel>
							</FormItem>
						)}
					/>
					</div>
				</div>

				{showDatePickers && (
					<div className="space-x-2 pb-4">
						<FormLabel>Start Date</FormLabel>
						<DateTimePicker control={form.control} name="dateStart" />
						<FormLabel>End Date</FormLabel>
						<DateTimePicker control={form.control} name="dateEnd" />
					</div>
				)}

				<Button type="submit">Search</Button>
			</form>
		</Form>
	);
}
