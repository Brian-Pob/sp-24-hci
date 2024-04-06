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
import {useNavigate} from "@tanstack/react-router";
// import { useNavigate } from "@tanstack/react-router";

export function LoginForm() {
	const [, setAuth] = useAuth();
	const [, setEmail] = useState("");
	const [, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate({ from: "/login" });
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	async function onSubmit(values) {
		const stored_data_string = localStorage.getItem(values.email);
		if (stored_data_string !=null)
		{
			const storedData = JSON.parse(stored_data_string);
			if (storedData.email === values.email && storedData.password === values.password)
			{
				setAuth(true);
				navigate({
					to: "/search",
				});
			}
		}
		location.reload();
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
										type={showPassword ? "text" : "password"}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</>
					)}
				/>
				<FormField
					control={form.control}
					name="show password"
					render={({ field }) => (
						<FormItem>
								<FormControl>
									<Checkbox
										{...field}
										onClick={() => setShowPassword(!showPassword)}
										className="mr-2"
									/>
								</FormControl>
								<FormLabel>Show Password</FormLabel>
							</FormItem>
					)}
				/>	
				<Button type="submit">Login</Button>
			</form>
		</Form>
	);
}
