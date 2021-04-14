import { useTheme } from '../lib/themeContext';

const FloatingColorMode = () => {
  const { mode, setMode } = useTheme();

  return (
    <button
      onClick={() => {
        setMode();
      }}
      title="Toggle Dark Mode"
      className="fixed bottom-2 right-2 h-14 w-14 z-50 border border-gray-500 p-3 rounded-full bg-gray-200 hover:bg-gray-600 hover:text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    </button>
  );
};

export default FloatingColorMode;
