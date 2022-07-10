import User from './User';
import useAxios from "../../hooks/useAxios";
import axios from "../../api/axiosInstance";

//componente que renderiza todos os usuários no dashboard do admin
//milestone2: as funções so emitem um aviso para simular a função
function UserList() {

    const [users, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: 'http://localhost:3500/user',
        requestConfig: {

        }
    })

    function editUser() {
        alert('Usuário se tornou admin');
    }

    function removeUser() {
        alert('Usuário removido');
    }

    return (
        <>
            {users.map((user, key) => {
                return (
                    <User key={key}
                        id={user.id}
                        name={user.name}
                        admin={user.admin}
                        edit={editUser}
                        remove={removeUser}
                        style={key}
                    />
                )
            })}
        </>
    )
}

export default UserList