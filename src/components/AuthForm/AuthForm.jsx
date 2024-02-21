import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle } from "./AuthFormStyles";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import { useState } from "react";
import {useMutation, useQuery} from "@apollo/client";
import { GET_ALL_USERS, GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
const AuthForm = () => {
    const [isVisible, setIsVisble] =useState(false)
    const navigate = useNavigate()
    const [regState, setRegState ]= useState({
        username: "",
        password: ""
    })
    const handleVisible =() => {
        setIsVisble(prev=>!prev)
    }
   /* const handleChange = (event) => {
       const {name, value} = event.target
    } */
    const handleChange = (event) => {
       
        const { name, value } = event.target;
        console.log(value)
        setRegState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    //=================================================

    const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
    const {data:oneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
        variables: {
           id: 1

        }
    })
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)

    console.log("ONE USER"+JSON.stringify(oneUser))

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }
    }, [data])

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
    const getAll = e => {
        e.preventDefault()
        refetch()
    }
    const handleNavigate = (event) => {
        addUser(event)
      //  navigate("/personal")
    }
    if(loading) {
        return <Spinner />
    }
    return (
        <AuthFormWrapper>
         {/*   <Spinner /> */}
            <AuthFormStyled>
                <AuthTitle>Auth form</AuthTitle>
                <AuthFormContent>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle>Username</AuthItemContentItemSubTitle>
                        <AuthIcon  src={User} alt="user"/>
                     <AuthItemContentItemInput name="username" placeholder="Type username" type="text" 
                     onChange={(event)=>handleChange(event)}
                     required
                     />
                    </AuthItemContentItem>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle>Password</AuthItemContentItemSubTitle>
                        <EyeIcon onClick={handleVisible}  src={  isVisible ? Visible : Hidden} alt="user"/>
                     <AuthItemContentItemInput name="password" placeholder="Type password"  
                     type={isVisible ? "text" : "password"}
                     onChange={(event)=>handleChange(event)}
                     required
                     />
                    </AuthItemContentItem>
                    <AuthItemContentSubmit
                    onClick={(event)=> handleNavigate(event)}
                     //onClick={(e) => addUser(e)}
                    type="submit"
                    >Submit 
                  
                    </AuthItemContentSubmit>
                </AuthFormContent>
                <AuthFormBackgroundStyled />
            </AuthFormStyled>
        </AuthFormWrapper>
    );
}

export default AuthForm;