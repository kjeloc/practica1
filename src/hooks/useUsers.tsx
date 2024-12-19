import { useEffect, useState } from 'react'
import { User } from '../interfaces/request.response'
import { loadUserActions } from '../actions/loadUser'

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        loadUserActions().then((users) => setUsers(users))
    }, [])

    return { users }
}
