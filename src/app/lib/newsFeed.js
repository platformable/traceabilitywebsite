'use server'
import { NextResponse } from 'next/server';

export const getNewsFeed = async (request) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/newsfeed/`);

    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching news feed:', error);
    return NextResponse.json({ 
      message: 'An error occurred while fetching news feed.', 
      statusText: 'Fail' 
    });
  }
};