import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const withAuth = (Component) => {
   

    const Auth = (props) => {
        const user = useSelector((store) => store.auth.user)
        if(!user.loggedIn){
            return <Navigate to={'/signin'}/>
        }
        return <Component {...props}/>
    }
    return Auth
}