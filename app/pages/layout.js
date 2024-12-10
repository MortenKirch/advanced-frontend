import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import BackButton from "../components/BackButton";
import "../globals.css"
import "../codetest.js"
export default function pageLayout({ children }) {
  return (

      <section className="mt-16 mb-20">
        <NavbarTop/>
       
        <BackButton/>
        <Navbar/>
        {children}
      </section>

  );
}
