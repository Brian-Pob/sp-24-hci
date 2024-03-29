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
import { useForm } from "react-hook-form";

export function LoginForm() {
	const form = useForm({
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(values) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-3"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<>
							<FormItem>
								<FormLabel>email</FormLabel>
								<FormControl>
									<Input
										placeholder="example@gmail.com"
										{...field}
										type="email"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormLabel>password</FormLabel>
								<FormControl>
									<Input placeholder="password" {...field} type="password" />
								</FormControl>
							</FormItem>
						</>
					)}
				/>
				<Button type="submit">Login</Button>
			</form>
		</Form>
	);
}
