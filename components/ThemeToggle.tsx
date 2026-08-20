"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = theme === "system" ? resolvedTheme : theme;

  // Avoid hydration mismatch: render neutral placeholder until mounted
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-md p-2 text-paper hover:bg-paper/10 focus:outline-none focus:ring-2 focus:ring-teal"
        title="Toggle theme"
      >
        <Sun className="h-4 w-4 opacity-0" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-paper hover:bg-paper/10 focus:outline-none focus:ring-2 focus:ring-teal"
      title="Toggle theme"
    >
      {current === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
