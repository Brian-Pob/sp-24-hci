import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: Login,
});

function Login() {
	const [isAuth] = useAuth();

	return isAuth ? (
		<Navigate to="/" />
	) : (
		<div className="w-full flex flex-col gap-20">
			<div>
				<img src={logo} alt="logo" className="w-32 h-32 mx-auto" />
				<h1 className="font-bold text-4xl text-center">GroupConnect</h1>
			</div>
			<div>
				<LoginForm />
				<div>
					<p className="text-center uppercase mt-4">or</p>
					<Link
						to="/create"
						className=" mt-4 inline-block text-center border border-primary bg-background hover:bg-accent hover:text-accent-foreground w-full h-10 rounded-md px-4 py-2"
					>
						Create an account
					</Link>
				</div>
			</div>
		</div>
	);
}
