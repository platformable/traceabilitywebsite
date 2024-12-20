'use server';
import * as db from '../../api/dbConnection';

export const getDataFields = async () => {
  try {
    const result = await db.query(`select "DatatableName", "DatatableIcon","DatatableDescription", "DatatableSource", "DatatableUsage", "DatatableMethod", "DatabaseMethodShort","DatatableLimitations", "DatatableEquity", "DatatableFrequpdate", "DatatableLastupdated" from "traceability"."Datatables" d order by "DatatableName" asc`);

    if (result.rows.length === 0) {
      throw new Error(`No data found`);
    }
    const data = result.rows
  
    return {data: data, statusText: 'OK'};
  } catch (error) {
    console.error('Error fetching datafields:', error);
    return { 
      message: error.message, 
      statusText: 'Fail' 
    }
  }
};