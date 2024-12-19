import useUsers from "../hooks/useUsers"
import UserRow from "./UserRow"

export default function UserPage() {
    const { users } = useUsers()
    return (
        <>
            <h3>Usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <td>Avatar</td>
                        <td>Nombre</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserRow user={user} key={user.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
