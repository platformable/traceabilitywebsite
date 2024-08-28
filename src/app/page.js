import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG";
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home-content" className="relative container mx-auto pb-14">
    <Header />
    <Hero />
    <EcosystemParticipantSVG />
    <EcosystemParticipantTable />
    <Footer />
    </main>
  );
}
