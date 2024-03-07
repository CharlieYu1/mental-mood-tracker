import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, loading }}>
            {children}
        </AuthContext.Provider>
    )
}