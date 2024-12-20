'use server';
import * as db from '../../api/dbConnection';

export const getMetadata = async (dataFieldName) => {
  try {
    const result = await db.query(`select * from "traceability"."Datataxonomy" where "DatateblesList" LIKE ANY (ARRAY['{"%${dataFieldName}%"}']) ORDER BY "TaxonomyCategory"  asc, "TaxonomyListOrder" asc, "TaxonomySubcategory" desc;`);

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