import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [id, setId] = useState(0)

    useEffect(() => {
        const userToken = localStorage.getItem('user_token')
        const userStorage = localStorage.getItem('users_db')

        if (userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            )

            if (hasUser) setUser(hasUser[0])
        }

    }, [])

    const signin = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem('user_token', JSON.stringify({ email, token}))

                let admin = hasUser[0].admin
                setUser({ email, password, admin })
                return
            } else {
                return "Email ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado"
        }
    }

    const signup = (info) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter((user) => user.email === info.email)

        if (hasUser?.length) {
            return "Email já cadastrado"
        }

        setId(id + 1)
        info['id'] = id
        info['admin'] = false

        let newUser

        if (userStorage) {
            newUser = [...userStorage, info]
        } else {
            newUser = [info]
        }

        localStorage.setItem('users_db', JSON.stringify(newUser))
    }

    const signout = () => {
        setUser(null)
        localStorage.removeItem('user_token')
    }

    const toggleAdmin = (email) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email) {
                hasUser[0].admin = !hasUser[0].admin
                return
            } else {
                return "Email incorreto"
            }
        } else {
            return "Usuário não cadastrado"
        }
    }

    const isAdmin = (email) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].admin === true) {
                return true
            }

            return false
        }
        return false
    }

    

    return (
        <AuthContext.Provider value={{user, signed: !!user, email: user?.email, isAdmin, signin, signup, signout, toggleAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}