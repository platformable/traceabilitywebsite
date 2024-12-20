'use server';
import * as db from '../../api/dbConnection';

export const getDataFields = async (dataFieldName) => {
  try {
    const result = await db.query(`select * from "traceability"."Datafields" where "DatatableList" LIKE ANY (ARRAY['{"%${dataFieldName}%"}']) order by "DataField" asc`);

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