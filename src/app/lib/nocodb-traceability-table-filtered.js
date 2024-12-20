// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use server'
import { Api } from 'nocodb-sdk'


export async function getEcosystemTraceabilityTableData(selectedOption) {
/*  console.log("executing getEcosystemTraceabilityTableData",prevState) */
  const selectedParticipant = selectedOption?.db_label
  const parameterToFilter = selectedOption?.db_label



  const api = new Api({
    baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
    headers: {
      'xc-auth': process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN
    }
  })
  try {
    const selectTable = () => {
      const tablesToSelect = {
        'Standards & Protocols': 'Standardsprotocols',
        'Data Governance models': 'Datagovernancemodels'
      }
      const result = tablesToSelect[selectedParticipant] ? tablesToSelect[selectedParticipant] : 'Entities' 
      return result
    }
    const tableSelected = selectTable()
    console.log("selectedParticipant",selectedParticipant)
    const data = await api.dbViewRow.list(
        "noco",
        "[DASHBOARD] - Open traceablity",
        tableSelected,
        tableSelected, {
          "offset": 0,
          "limit": 50,
          "where":  `(EntityType,like,${selectedParticipant})`
      })
      //  console.log("data",data) 
    return {data: data?.list, errors: false}
  } catch (error){
    console.log("error en el sdk" )
    return {data: [], errors: true}

  }
}

