import { createContext, useState } from "react"

const AuthContext= createContext(null);

export const AuthProvider=({children})=>{


    return <AuthContext.provider value={{}}>{children}</AuthContext.provider>
}