import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserAsync, selectLoggedInUser } from "./authSlice";
import { useEffect } from "react";

function Protected({children}) {

    
    const user = useSelector((state)=>state.auth.loggedInUser)
    
   
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
}

export default Protected;