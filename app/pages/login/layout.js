import BackButton from "@/app/components/BackButton";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"mt-16 mb-20"}
      >
       <BackButton/>
      
        {children}
      </body>
    </html>
  );
}
