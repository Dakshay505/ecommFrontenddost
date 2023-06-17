import axios from "axios";

export async function fetchAllProducts() {
  
    //TODO: we will not hard-code server URL here
    const {data} = await axios.get('http://localhost:5050/products',{
      withCredentials:true
    })
    return data
  
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:5050/products/', {
      method: 'POST',
      body: JSON.stringify(product),
      withCredentials:true,
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      'http://localhost:5050/products/' + update.id,
      {
        method: 'PATCH',
        withCredentials:true,
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export async function fetchProductById(id) {

    //TODO: we will not hard-code server URL here
    const {data} = await axios.get(`http://localhost:5050/products/${id}`,{
      withCredentials:true
    })
    return data;
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10} 
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  console.log(queryString);
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5050/products?'+queryString,{
      withCredentials:true
    }) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}
export async function adminProductsByFilters(filter,sort,pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10} 
  let queryString = '';

  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
//  const totalItems = await response.headers.get('X-Total-Count');
//   const data  = await axios.get(`http://localhost:5050/products/admin?${queryString}`)
//    return ({data:{products:data,totalItems:+totalItems}})
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:5050/products/admin?'+queryString) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}


export async function fetchCategories() {

  const {data} = await axios.get('http://localhost:5050/products/cat');
  
  return data;
  
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:5050/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}