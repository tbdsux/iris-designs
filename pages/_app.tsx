import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/tailwind.css";
import SEO from "../next-seo.config";
import { ThemeProvider } from "../lib/themeContext";

function IrisDesigns({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default IrisDesigns;
