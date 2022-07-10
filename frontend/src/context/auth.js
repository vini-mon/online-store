import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    // const [id, setId] = useState(2)
    const [msg, setMsg] = useState('')

    // se pa mudar pra ele atualizar qnd mudar de rota
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        if (user) {
            async function getUser() {
                try {
                    const res = await axios.get('http://localhost:3500/user/' + user.email);
                    localStorage.setItem('token', JSON.stringify(res.data))
                } catch(e) {
                    localStorage.removeItem('token')
                }
            }

            getUser();
        }
    }, [])

    useEffect(() => {
        
    }, [msg])

    const signout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    const toggleAdmin = (email) => {
        // const userStorage = JSON.parse(localStorage.getItem('users_db'))
        // if (userStorage === null) return "Problema interno: banco de dados inexistente."

        // const userIndex = userStorage.findIndex((user) => user.email === email)
        
        // if (userIndex === -1) return "Usuário não encontrado"

        // let updatedStorage = [...userStorage]
        // updatedStorage[userIndex].admin = !updatedStorage[userIndex].admin
        // localStorage.setItem('users_db', JSON.stringify(updatedStorage))

        // return "Alteração realizada com sucesso."
    }

    const isAdmin = (email) => {
        // const userStorage = JSON.parse(localStorage.getItem('users_db'))
        // const hasUser = userStorage?.filter((user) => user.email === email)

        // if (hasUser?.length) {
        //     if (hasUser[0].email === email && hasUser[0].admin === true) {
        //         return true
        //     }

        //     return false
        // }
        // return false
    }

    const getInfo = (email) => {
        // async function info() {
        //     try {
        //         const res = await axios.get('http://localhost:3500/user/' + email);
        //         console.log(res)
        //         setUser({
        //             id: res.data._id,
        //             email: res.data.email,
        //             name: res.data.name,
        //             phone: res.data.phone,
        //             address: res.data.address,
        //             admin: res.data.admin
        //         })
        //     } catch(e) {
        //         localStorage.removeItem('token')
        //         setUser(null)
        //     }
        // }

        // info();

        return user;

        // const userStorage = JSON.parse(localStorage.getItem('users_db'))

        // const hasUser = userStorage?.filter((user) => user.email === email)

        // if (hasUser?.length) {
        //     if (hasUser[0].email === email) {
        //         return hasUser[0]
        //     }
        // }
        // return null;
    }

    const updateInfo = (info, password) => {
        
        async function check() {
            try {
                const res = await axios.post('http://localhost:3500/user/auth', {
                    email: user.email,
                    password: password
                });
                setMsg('')
            } catch(e) {
                // newMsg = e.response.data.message
                setMsg(e.response.data.message)
            }
        }

        async function update() {
            try {
                await axios.put('http://localhost:3500/user/' + user.email, info);
            } catch(e) {
                console.log(e)
            }
        }

        async function getUser() {
            try {
                const res = await axios.get('http://localhost:3500/user/' + user.email);
                localStorage.setItem('token', JSON.stringify(res.data))
                setUser({
                    id: res.data._id,
                    email: res.data.email,
                    name: res.data.name,
                    phone: res.data.phone,
                    address: res.data.address,
                    admin: res.data.admin
                })
            } catch(e) {
                localStorage.removeItem('token')
            }
        }

        check();
        // console.log(msg)
        if (msg !== '') return msg;
        update();
        getUser();

        setMsg('Alteração realizada com sucesso.')

        return msg;





        // const userStorage = JSON.parse(localStorage.getItem('users_db'))

        // if (userStorage === null) return "Problema interno: banco de dados inexistente."
        
        // const userEmail = user.email

        // const userIndex = userStorage.findIndex((user) => user.email === userEmail)
        
        // if (userIndex === -1) return "Usuário não encontrado"

        // let updatedStorage = [...userStorage]

        // updatedStorage[userIndex].name = info.name
        // updatedStorage[userIndex].phone = info.phone
        // updatedStorage[userIndex].adress = info.adress

        // localStorage.setItem('users_db', JSON.stringify(updatedStorage))

        // return "Alteração realizada com sucesso."
    }

    const getUsers = () => {
        // const userStorage = JSON.parse(localStorage.getItem('users_db'))

        // if (userStorage === null) return "Problema interno: banco de dados inexistente."

        // return userStorage
    }

    return (
        <AuthContext.Provider value={{user, signed: !!user, email: user?.email, isAdmin, signout, toggleAdmin, getInfo, updateInfo, getUsers}}>
            {children}
        </AuthContext.Provider>
    )
}