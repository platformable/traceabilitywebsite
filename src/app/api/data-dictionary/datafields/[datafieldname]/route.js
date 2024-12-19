import { NextResponse, NextRequest } from 'next/server';
const db = require('@/app/api/dbConnection');


export async function GET(req,res) {


  try {


    const { datafieldname } =  await req.params; 
   
//let dataFieldName= 'Regulatory Complexity Indices'
      const query ={
          text:`select * from traceability."Datafields" where "DatatableList" LIKE ANY (ARRAY['{"%${datafieldname}%"}']) order by "DataField" asc`
        }
        const result = await db.query(query);
        if (result.rows.length === 0) {
          return NextResponse.json({ message: 'No data found' }, { status: 200 }); 
        }


    return NextResponse.json(result.rows); 

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ 
      message: "An error occurred while fetching data from the database.", 
      statusText: "Fail" 
    });
  }

}