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
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export function LoginForm() {
	const [, setAuth] = useAuth();
	const [, setUsername] = useState("");
	const [, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();
	const form = useForm({
		defaultValues: {
			username: "",
		},
	});

	async function onSubmit(values) {
		setAuth(true);
		console.log(values);
		await navigate({ to: "/" });
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
										onChange={(e) => setUsername(e.target.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormLabel>password</FormLabel>
								<FormControl>
									<Input
										placeholder="password"
										{...field}
										type={showPassword ? "text" : "password"}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</FormControl>
							</FormItem>
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
						</>
					)}
				/>
				<Button type="submit">Login</Button>
			</form>
		</Form>
	);
}
