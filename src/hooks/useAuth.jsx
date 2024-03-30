import { useState } from "react";

export function useAuth() {
	const [isAuth, setAuthState] = useState(
		window.localStorage.getItem("isAuth") || false,
	);

	function setAuth(auth) {
		window.localStorage.setItem("isAuth", auth);
		setAuthState(auth);
	}

	return [isAuth, setAuth];
}
