import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { qrcode } from "vite-plugin-qrcode";
const __filename = fileURLToPath(import.meta.url);
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite(), qrcode()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
