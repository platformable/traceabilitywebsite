import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG";
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable";
import Footer from "@/components/Footer";
import {getEcosystemVisualizationData} from '@/app/lib/nocodb-traceability-ecosystem-view'

export default async function Home() {

  const ecosystemViewData =  await getEcosystemVisualizationData()
  // console.log("data from frontend server",ecosystemViewData)
  return (
    <div id="home-content" className="relative pb-14">
    <Header />
    <Hero />
    <EcosystemParticipantSVG ecosystemViewData={ecosystemViewData}/>
    <EcosystemParticipantTable />
    <Footer />
    </div>
  );
}
