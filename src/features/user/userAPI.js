import axios from "axios";

export async function fetchLoggedInUserOrders(userId) {
  const {data} = await axios.get(`http://localhost:5050/orders`)
  return data
}


export async function fetchLoggedInUser(userId) {
    const {data} = await axios.get(`http://localhost:5050/users/me`);
    
    return data;
  }



export function updateUser(update) {
  return new Promise(async (resolve) => {

    const response = await fetch('http://localhost:5050/users/me', {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

