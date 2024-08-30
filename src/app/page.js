import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG";
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable";
import Footer from "@/components/Footer";
import {getEcosystemVisualizationData} from '@/app/api/nocodb-traceability-ecosystem-view'

export default async function Home() {



  const ecosystemViewData =  await getEcosystemVisualizationData()

  return (
    <main id="home-content" className="relative pb-14">
    <Header />
    <Hero />
    <EcosystemParticipantSVG ecosystemViewData={ecosystemViewData}/>
    <EcosystemParticipantTable />
    <Footer />
    </main>
  );
}
