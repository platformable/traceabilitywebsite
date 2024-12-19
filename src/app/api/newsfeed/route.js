import { NextResponse } from 'next/server';
const db = require("../dbConnection");

export async function GET() {
  try {
    const result = await db.query(`select * from "traceability"."NewsFeed"`);

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