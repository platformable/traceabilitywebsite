'use server';
import * as db from '../../api/dbConnection';

export const getTaxonomies = async (dataFieldName) => {
  try {
    const result = await db.query(`select * from "traceability"."Datataxonomy" where "DatateblesList" LIKE ANY (ARRAY['{"%${dataFieldName}%"}']) ORDER BY "TaxonomyCategory"  asc, "TaxonomyListOrder" asc, "TaxonomySubcategory" desc;`);

    if (result.fields.length === 0) {
      throw new Error(`No data found`);
    }
    const data = result.fields
    return {data: data, statusText: 'OK'};
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return { 
      message: error.message, 
      statusText: 'Fail' 
    }
  }
};