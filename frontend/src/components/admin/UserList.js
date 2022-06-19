import User from './User';
import useAuth from '../../hooks/useAuth';

function UserList() {

    const { getUsers } = useAuth();

    const users = getUsers()

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