import { ThemeProvider } from "../theme/ThemeContext"; // Adjust path if needed
import LenisProvider from "../utils/LenisProvider";
import { Toaster } from "../ui/sonner";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider> {/* for theme*/}
      <LenisProvider />
      <Toaster />
      <Header />  {/* Navbar is inside layout */}
      <main>{children}</main>  {/* Renders page content */}
    </ThemeProvider>
  );
};

export default Layout;
