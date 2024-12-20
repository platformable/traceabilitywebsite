'use server';
import * as db from '../../api/dbConnection';

export const getMetadata = async (dataFieldName) => {
  try {
    const result = await db.query(`select "DatatableIcon","DatatableDescription", "DatatableSource", 
            "DatatableUsage", "DatatableMethod", "DatabaseMethodShort","DatatableLimitations", 
            "DatatableEquity", "DatatableFrequpdate", "DatatableLastupdated" from "traceability"."Datatables" where  "DatatableName" ='${dataFieldName}'`);

    if (result.rows.length === 0) {
      throw new Error(`No data found`);
    }
    const data = result.rows
  
    return {data: data, statusText: 'OK'};
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return { 
      message: error.message, 
      statusText: 'Fail' 
    }
  }
};