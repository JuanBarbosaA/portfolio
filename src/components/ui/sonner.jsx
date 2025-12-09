import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

// Hook simple para tema
function useTheme() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => setTheme(darkQuery.matches ? "dark" : "light");
    updateTheme();

    darkQuery.addEventListener("change", updateTheme);
    return () => darkQuery.removeEventListener("change", updateTheme);
  }, []);

  return { theme };
}

const Toaster = ({ ...props }) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme} // "light" o "dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
