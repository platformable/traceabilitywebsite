// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use server'
import { Api } from 'nocodb-sdk'


export async function getEcosystemTraceabilityTableData(prevState, formData) {
 console.log("executing getEcosystemTraceabilityTableData",prevState)
  const selectedParticipant = prevState?.name
  //  formData.get('entityName')
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
    // console.log("table selected",tableSelected)
    const data = await api.dbViewRow.list(
        "noco",
        "Open traceablity Dashboard",
        tableSelected,
        tableSelected, {
          "offset": 0,
          "limit": 50,
          "where":  `(EntityTipeList,eq,anyof,Tools provider)`
      })
      // console.log("data",data)
    return {data: data?.list, errors: {}}
  } catch (error){
    console.log("jodido",)
    console.log("error en el sdk" )
  }
}

