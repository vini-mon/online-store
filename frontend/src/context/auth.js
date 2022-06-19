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

        if (userStorage === null) return "Problema interno: banco de dados inexistente."

        const userIndex = userStorage.findIndex((user) => user.email === email)
        
        if (userIndex === -1) return "Usuário não encontrado"

        let updatedStorage = [...userStorage]
        updatedStorage[userIndex].admin = !updatedStorage[userIndex].admin
        localStorage.setItem('users_db', JSON.stringify(updatedStorage))

        return "Alteração realizada com sucesso."
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

    const getInfo = (email) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email) {
                return hasUser[0]
            }
        }
        return null;
    }

    const updateInfo = (info) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        if (userStorage === null) return "Problema interno: banco de dados inexistente."
        
        const userEmail = user.email

        const userIndex = userStorage.findIndex((user) => user.email === userEmail)
        
        if (userIndex === -1) return "Usuário não encontrado"

        let updatedStorage = [...userStorage]

        updatedStorage[userIndex].name = info.name
        updatedStorage[userIndex].phone = info.phone
        updatedStorage[userIndex].adress = info.adress

        localStorage.setItem('users_db', JSON.stringify(updatedStorage))

        return "Alteração realizada com sucesso."
    }

    

    return (
        <AuthContext.Provider value={{user, signed: !!user, email: user?.email, isAdmin, signin, signup, signout, toggleAdmin, getInfo, updateInfo}}>
            {children}
        </AuthContext.Provider>
    )
}