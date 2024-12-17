import Hero from "@/components/Hero";
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG";
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable";
import {getEcosystemVisualizationData} from '@/app/lib/nocodb-traceability-ecosystem-view'

export default async function Dashboard() {

  const ecosystemViewData =  await getEcosystemVisualizationData()
  // console.log("data from frontend server",ecosystemViewData)
  return (
    <main id="home-content" className="relative pb-14">
    <Hero />
    <EcosystemParticipantSVG ecosystemViewData={ecosystemViewData}/>
    <EcosystemParticipantTable />
    </main>
  );
}
