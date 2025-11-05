import Hero from "@/components/Hero"
import EcosystemParticipantSVG from "@/components/EcosystemParticipantSVG"
import EcosystemParticipantTable from "@/components/EcosystemParticipantTable"
import {
  getEcosystemVisualizationTotals,
  getEcosystemVisualizationData,
} from "@/app/lib/nocodb-traceability-ecosystem-view"
import EcosystemParticipantSVGCopy from "@/components/EcosystemParticipantSVGCopy"

export default async function Dashboard() {
  /* const ecosystemViewData = await getEcosystemVisualizationData() */
  const ecosystemViewData = await getEcosystemVisualizationTotals()
  console.log("ecosystemViewData", ecosystemViewData)
  return (
    <main id="home-content" className="relative pb-7 pt-20">
      <Hero />
      <EcosystemParticipantSVGCopy ecosystemViewData={ecosystemViewData} />
      <EcosystemParticipantTable />
    </main>
  )
}
