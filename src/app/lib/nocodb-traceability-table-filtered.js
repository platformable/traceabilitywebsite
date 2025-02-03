// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use server'

export async function getEcosystemTraceabilityTableData(selectedOption, APIToken) {

  // console.log("sessions",session?.APIToken)
  const selectedParticipant = selectedOption?.db_label

  try {
    console.log("selectedParticipant",`${process.env.DEV_BACKEND_API_URL}/ecosystem/${selectedParticipant}`)
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
    console.log("error en el sdk" , error)
    return {data: [], errors: true}

  }
}

