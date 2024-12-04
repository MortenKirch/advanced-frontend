import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import BackButton from "../components/BackButton";
import "../globals.css"
export default function pageLayout({ children }) {
  return (
    <html lang="en">
      <body className="mt-16 mb-20">
        <NavbarTop/>
       
        <BackButton/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
