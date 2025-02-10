// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use server'

export async function getEcosystemTraceabilityTableData(selectedOption, APIToken) {

  const selectedParticipant = selectedOption?.db_label

  try {
    const res = await fetch(`${process.env.DEV_BACKEND_API_URL}/ecosystem/${selectedParticipant}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${APIToken}`
      }
    })


      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      const data = await res.json()

    return {data: data, errors: false}
  } catch (error){
    console.log("Error in service" , error)
    return {data: [], errors: true}

  }
}

