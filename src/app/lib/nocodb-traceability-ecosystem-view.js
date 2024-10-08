'use server'
import { Api } from "nocodb-sdk";

export async function getEcosystemVisualizationData () {
//  console.log("executing getEcosystemTraceabilityView")
    const api = new Api({
        baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
        headers: {
          'xc-auth': process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN
        }
      })
    try {
      const data = await api.dbViewRow.list(
        "noco",
        "[DASHBOARD] - Open traceablity",
        "EcosystemView",
        "EcosystemView", {
          "offset": 0,
          "limit": 25,
          "where": ""
      })
      return {data: data?.list, errors: {}}

    }
    catch (error) {
      console.error(error);
    }
}


    