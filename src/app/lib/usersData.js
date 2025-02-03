import { revalidatePath } from 'next/cache';

export async function fetchActiveUsers(clientToken) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const res = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/activeUsers`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${clientToken}`
        }
    })
    const users = await res.json();

    // const customers = data.rows;
    return users.data;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch active users.');
  }
}
export async function fetchInactiveUsers(clientToken) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const res = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/notActiveUsers`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${clientToken}`
        }
    })
    const users = await res.json()
    

    // const customers = data.rows;
    return users.data;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
export async function fetchAuthorisedUsers(clientToken) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const res = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/authorizedUsers`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${clientToken}`
        }
    })
    
    const users = await res.json();
    // console.log("new fetch users", users)
    // const customers = data.rows;
    return users.data;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}