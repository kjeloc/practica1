import axios from "axios";
import { ResUserList } from "../interfaces/request.response";


export const loadUserActions = async () => {
    const { data } = await axios.get<ResUserList>('https://reqres.in/api/users?page=1')
    return data.data
}