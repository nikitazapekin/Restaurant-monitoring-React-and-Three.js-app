import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useMutation, useQuery} from "@apollo/client";
import { CREATE_USER } from "../mutations/user";
const isAuthHook = ()=> {
    const [isAuth, setIsAuth] = useState(false)

    const {data:oneUser} = useQuery(GET_ONE_USER, {
        variables: {
           id: 1
        }
    })
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)
    const [regState, setRegState ]= useState({
        username: "",
        password: ""
    })
    console.log("ONE USER"+JSON.stringify(oneUser))
const navigate= useNavigate()
    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username: regState.username, password: regState.password
                }
            }
        }).then(({data}) => {
            console.log(data)
            navigate(`/personal/${data.createUser.id}`)
            setUsername('')
            setAge(0)
        })
    }
    return {addUser, regState, setRegState}
}
export default isAuthHook