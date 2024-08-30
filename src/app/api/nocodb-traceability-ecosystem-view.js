'use server'
import { Api } from "nocodb-sdk";

export async function getEcosystemVisualizationData () {
 console.log("executing getEcosystemTraceabilityView")
    const api = new Api({
        baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
        headers: {
          'xc-auth': process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN
        }
      })
    
    api.dbViewRow.list(
      "noco",
      "Open traceablity Dashboard",
      "EcosystemView",
      "EcosystemView", {
        "offset": 0,
        "limit": 25,
        "where": ""
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.error(error);
    });
}


    