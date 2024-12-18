// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use server'
import { Api } from 'nocodb-sdk'
import { NextResponse } from 'next/server'
import { redirect } from "next/navigation";

export async function getEcosystemTraceabilityTableData(selectedOption) {
/*  console.log("executing getEcosystemTraceabilityTableData",prevState) */
  const selectedParticipant = selectedOption?.name
  const parameterToFilter = selectedOption?.db_label

/*   console.log("params", parameterToFilter) */

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
/*     console.log("table selected",tableSelected) */
    const data = await api.dbViewRow.pos(
        "noco",
        "[DASHBOARD] - Open traceablity",
        tableSelected,
        tableSelected, {
          "offset": 0,
          "limit": 500,
          "where":  `(EntityType,like,${selectedParticipant})`
      })
      //  console.log("data",data) 
    return {data: data?.list, errors: false}
  } catch (error){
    console.log("error en el sdk" )
    return {data: [], errors: true}

  }
}


export async function sendSupportRequest(clientToken,formData) {
  

  const data = {
    "Application": 'traceability',
    "UserId": formData.get("user_id").trim(),
    "Email": formData.get("email").trim(),
    "Subject": formData.get("subject").trim(),
    "Description": formData.get("message").trim(),

  };

  try {
    fetch(
      "https://nocodb-app-agy4g.ondigitalocean.app/api/v1/db/data/noco/Platformable Operational/SupportRequest",
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "xc-auth": process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN
        },
        body: JSON.stringify(data)
      })
      .then(response => {console.log("support message sent")

         
    
      }
      
    )  // Parse the response as JSON
      .then(data => {
        // Handle successful response with data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Handle the error, like displaying an error message to the user
      });

  } catch (error) {
    console.log("PASA NO OK")
    //redirect(`/admin-panel`);
    console.log("support request error", error)
    return {
      message: "Something went wrong, try again",
      error: true
    };
  }
  return { error: null, success: true }
}
