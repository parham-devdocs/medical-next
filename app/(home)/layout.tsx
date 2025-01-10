
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
             <Navbar />
        <hr />
      <div className=" px-8 min-h-screen">{children}</div>
      <Footer/>
   </div>
     
      
  );
}
