import axios from "axios";
export async function addToCart(item) {
  console.log(item)
    const {data} = await axios.post('http://localhost:5050/cart/add',item,{
      withCredentials:true
    })
    return data;
    
}

export async function fetchItemsByUserId() {
  
    //TODO: we will not hard-code server URL here

    const {data} = await axios.get(`http://localhost:5050/cart/allcart`,{
      withCredentials:true
    })
    console.log("data in cart ",data);
    return data;
 
}

export async function updateCart(update) {
  const {data} = await axios.patch("http://localhost:5050/cart",update,{
    withCredentials:true
  })
  return data;
}

export async function deleteItemFromCart(itemId) {
  const {data} = await axios.delete(`http://localhost:5050/cart/${itemId}`,{
    withCredentials:true
  });
    return data
}

export async function resetCart() {
  // get all items of user's cart - and then delete each
   const {data} = await axios.delete("http://localhost:5050/cart/delete",{
    withCredentials:true
   })
   return data;
}