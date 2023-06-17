import axios from "axios";

export async function createUser(userData) {
  console.log("in api",userData);
    const {data} = await axios.post('http://localhost:5050/auth/signup',userData,{
      withCredentials:true
    })
    console.log("data is this",data)
    return data;
  
}
export async function me() {
    const {data} = await axios.get('http://localhost:5050/users/me',{withCredentials:true});
    console.log("data is this",data)
    return data;
  
}

export async function checkUser(loginInfo) {
 
    const email = loginInfo.email;
    const password = loginInfo.password;
    const {data} = await axios.post("http://localhost:5050/auth/login",{email,password},{
      withCredentials:true
    });
    return data;
    // TODO: on server it will only return some info of user (not password)

}
export async function updateUser(update) {
   const {data} = await axios.patch("http://localhost:5050/users",update,{
    withCredentials:true
   })
   return data;
 
}

export async function signout(userId) {
 
    const {data} = await axios.get("");
    return data;
  
}