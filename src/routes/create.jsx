import { createFileRoute } from '@tanstack/react-router'
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
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const Route = createFileRoute('/create')({
  component: Create

});

function Create(){
  const [, setAuth] = useAuth();
  const [, setEmail] = useState("");
	const [, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	// const navigate = useNavigate({ from: "/login" });
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	async function onSubmit(values) {
		setAuth(true);
		console.log(values);
		console.log(values.email);
		console.log(values.password);
		//location.reload();
		// await navigate({ to: "/" });
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
										autoComplete="email"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<>
							<FormItem>
								<FormLabel>password</FormLabel>
								<FormControl>
									<Input
										placeholder="password"
										autoComplete="current-password"
										{...field}
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</>
					)}
				/>
				<Button type="submit">Register</Button>
			</form>
		</Form>
   
  );
}