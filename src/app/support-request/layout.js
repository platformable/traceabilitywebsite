//import Nav from "../components/admin-panel/Nav";
import Header from "@/components/Header";

export default async function Layout({ children }) {
  
  return (
    <>
     {/*  <Nav /> */}
     <Header />

      <>{children}</>
      {/* <Footer /> */}
    </>
  );
}
