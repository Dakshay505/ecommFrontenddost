import axios from "axios";

export async function fetchLoggedInUserOrders() {
  const {data} = await axios.get(`http://localhost:5050/orders`)
  return data
}


export async function fetchLoggedInUser() {
    const {data} = await axios.get(`http://localhost:5050/users/me`);
    return data;
  }



export async function updateUser(update) {
  const {data} = await axios.patch("http://localhost:5050/users/me",update,{
    withCredentials:true
  })
  console.log("data is in update user",data);
  return data;
}

