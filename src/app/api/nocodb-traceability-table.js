// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Api } from 'nocodb-sdk'


export async function getEcosystemTraceabilityTableData() {
 console.log("executing getEcosystemTraceabilityTableData")

  const api = new Api({
    baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
    headers: {
      'xc-auth': process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN
    }
  })
  try {
    const data = await api.dbViewRow.list(
        "noco",
        "Core Dataset Prod",
        "ValueTaxonomy",
        "ValueTaxonomy", {
          list: ['ValueGenerationCategory'],
          "offset": 0,
          "limit": 100,
          "where":  ''
      })
      console.log("data",data)
    return data   
  } catch (error){
    console.log("data",jodido)
    console.log("error en el sdk" )
  }
}

