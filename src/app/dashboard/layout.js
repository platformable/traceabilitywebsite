import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG";
import Disclaimer from "@/components/Disclaimer";

export default async function Layout({ children }) {
  
  return (
    <>
      <Header  />

      {children}

    </>
  );
}
