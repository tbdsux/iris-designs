// darkMode is based from: https://jeffjadulco.com/blog/dark-mode-react-tailwind

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

type ThemeContextProps = {
	mode: string;
	setMode: () => void;
};
type ThemeProviderProps = {
	initialTheme?: string;
	children: ReactNode;
};

const ThemeContext = createContext<ThemeContextProps>({
	mode: "light",
	setMode: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(getInitialTheme());

	const handleSetTheme = (theme) => {
		const root = window.document.body;
		const isDark = theme === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(theme);

		setTheme(theme);
		localStorage.setItem("color-theme", theme);
	};

	const toggleTheme = () => {
		const t = theme === "dark" ? "light" : "dark";
		handleSetTheme(t);
	};

	useEffect(() => {
		handleSetTheme(theme);
	}, []);

	return (
		<ThemeContext.Provider value={{ mode: theme, setMode: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme can only be used in a ThemeProvider");
	}
	return context;
};

/*
  getInitialTheme gets the browser's preffered theme...
*/
const getInitialTheme = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("color-theme");
		if (typeof storedPrefs === "string") {
			return storedPrefs;
		}

		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
	}

	// If you want to use light theme as the default, return "light" instead
	return "light";
};
