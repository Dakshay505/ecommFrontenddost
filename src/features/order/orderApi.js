import axios from "axios";

export async function createOrder(order) {
 const {data} = await axios.post("http://localhost:5050/orders",order,{
  withCredentials:true
 })
   return data;
}

export async function updateOrder(order) {
   const {data} = await axios.patch(`http://localhost:5050/orders/${order.id}`,order,{
    withCredentials:true
   })
   return data;
}

export async function fetchAllOrders(sort, pagination) {
 let queryString = '';

 for (let key in sort) {
  queryString += `${key}=${sort[key]}&`;
}
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  const data = await axios.get(`http://localhost:5050/orders/admin/all?${queryString}`,{
    withCredentials:true
  })
 
  const totalOrders = await data.headers['x-total-count'];
  
  return { data: { orders: data.data, totalOrders: totalOrders } }
}