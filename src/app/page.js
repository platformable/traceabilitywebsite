import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomepageMainSVG from "@/components/HomepageMainSVG";
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto">
    <Header />
    <Hero />
    <HomepageMainSVG />
    <EcosystemParticipantTable />
    <Footer />
    </main>
  );
}
