import { NextResponse } from 'next/server';
const db = require("../dbConnection");

export async function GET(req,res) {

  const dataFieldName = req.nextUrl.searchParams.get('dataFieldName');
  
  try {
   // let dataFieldName = 'Regulatory Complexity Indices'
    const result = await db.query(`select * from traceability."Datafields" where "DatatableList" LIKE ANY (ARRAY['{"%${dataFieldName}%"}']) order by "DataField" asc`);

    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'No data found' }, { status: 200 }); 
    }
    const response = await result.rows

    return NextResponse.json(response); 
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ 
      message: "An error occurred while fetching data from the database.", 
      statusText: "Fail" 
    });
  } 
}