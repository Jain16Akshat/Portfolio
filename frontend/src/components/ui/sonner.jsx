import { useContext } from "react";
import { Toaster as Sonner } from "sonner"; //sonner library
import { ThemeContext } from "../theme/ThemeContext"; // Adjust path if needed

const Toaster = (props) => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <Sonner
      theme={theme} 
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
