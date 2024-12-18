import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Madkammeret",
  description: "Madkammeret er din lokale leverandør af frokostordning & mødeforplejning i århus & odder. Vi leverer jordnær service og mad i højeste klasse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <section className="mt-16 mb-20"> 

       
        <NavbarTop/>
        <AuthProvider>
      
        <Navbar/>
        {children}
        </AuthProvider>
        </section>
      </body>
    </html>
  );
}


