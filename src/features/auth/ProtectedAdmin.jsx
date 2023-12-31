import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "./authSlice";

function Protected({children}) {
    const user = useSelector(selectLoggedInUser)

    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    if(user && user.role!=="admin"){
        return <Navigate to="/" replace={true}/>
    }
    return children;
}

export default Protected;