import {createContext, useEffect, useState, type ReactNode} from 'react'
import { getMyDetails } from '../service/auth'

type AuthContextType = {
    user: any
    setUser : any
    loading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderTypes = {
    children:ReactNode
}

const AuthProvider = ({ children }: AuthProviderTypes) => {

    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        const access_Token = localStorage.getItem("accessToken")

        if(access_Token){
            
            setLoading(true)

             getMyDetails().then((res) => {

                if(res.data){
                    setUser(res.data)
                }else{
                    setUser(null)
                }

             }).catch((error) => {
                console.error(error)
             }).finally(() => {
                setLoading(false)
             })
        }else{
            setLoading(false)
            setUser(null)
        }
    } , [])

    return(

        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
