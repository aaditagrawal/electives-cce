"use client";

import { styles } from "@/styles/site.stylex";
import { styleClass } from "@/styles/classes";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Preserve the existing placeholder until the client theme is available.
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        xstyle={styles.themeTogglePlaceholder}
        className="sx-themeTogglePlaceholder"
      >
        <Sun className={styleClass("themeTogglePlaceholderIcon")} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      xstyle={styles.themeToggleButton}
      className="sx-themeToggleButton"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className={styleClass("themeToggleSun")} />
      ) : (
        <Moon className={styleClass("themeToggleMoon")} />
      )}
      <span className={styleClass("themeToggleLabel")}>Toggle theme</span>
    </Button>
  );
}
