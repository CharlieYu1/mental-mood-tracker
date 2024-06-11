import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const storedToken = localStorage.getItem('token')
            const storedUser = localStorage.getItem('user')
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        } catch (e) {

            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setToken(null)
            setUser(null)
        }
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, loading }}>
            {children}
        </AuthContext.Provider>
    )
}