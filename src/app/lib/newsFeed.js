'use server';
import * as db from '../api/dbConnection';

export const getNewsFeed = async (request) => {
  try {
    const result = await db.query(`select * from "traceability"."NewsFeed"`);

    if (result.rows.length === 0) {
      throw new Error(`No data found`);
    }
    const data = result.rows
  
    return {data: data, statusText: 'OK'};
  } catch (error) {
    console.error('Error fetching news feed:', error);
    return { 
      message: error.message, 
      statusText: 'Fail' 
    }
  }
};