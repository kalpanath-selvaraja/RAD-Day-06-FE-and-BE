import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import useAuth from "../hooks/useAuth";
import type { ReactNode } from "react";

type RequireAuthTypes= {
    children : ReactNode
    roles? : string[]
}


const RequireAuth = ({children, roles} : RequireAuthTypes) => {

    const {user, loading} =useAuth()

    if(loading){
        return <div>Loading !!</div>
    }

    if(!user){
        return <Navigate to={"/login"}  replace/>
    }

    if(roles && !roles.some((role) => user?.roles.includes(role))){
        return (
            <div>
                <h1>Access Denied</h1>
            </div>
        )
    }

    return <>{children}</>
}


function AppRouter() {
    return(
        <Routes>

            {/* only protected (After login, can access ) */}
            <Route path="/" element={ <RequireAuth>
                <Home />
            </RequireAuth>} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin only. */}
            <Route path="/home-admin">
                element= {
                    <RequireAuth roles={["ADMIN"]}>
                        <Home />
                    </RequireAuth>
                }
            </Route>

            
        </Routes>
    )
}


export default AppRouter