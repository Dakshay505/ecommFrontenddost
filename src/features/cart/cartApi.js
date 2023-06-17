import axios from "axios";
export async function addToCart(item) {
  console.log(item)
    const {data} = await axios.post('http://localhost:5050/cart/add',{
      withCredentials:true
    },item)
    return data;
    
}

export async function fetchItemsByUserId(userId) {
  
    //TODO: we will not hard-code server URL here
    const {data} = await axios.get(`http://localhost:5050/cart`,{
      withCredentials:true
    })
    return data;
 
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:5050/cart' , {
      method: 'PATCH',
      body: JSON.stringify(update),
      withCredentials:true,
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export async function deleteItemFromCart(itemId) {
  const {data} = await axios.delete(`http://localhost:5050/cart/${itemId}`,{
    withCredentials:true
  });
    return data
  // return new Promise(async (resolve) => {
  //   const response = await fetch('http://localhost:5050/cart/' + itemId, {
  //     method: 'DELETE',
  //     headers: { 'content-type': 'application/json' },
  //   });
  //   const data = await response.json();
  //   // TODO: on server it will only return some info of user (not password)
  //   resolve({ data: { id: itemId } });
  // });
}

export function resetCart(userId) {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({status:'success'})
  });
}