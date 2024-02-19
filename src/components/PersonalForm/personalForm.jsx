import { PersonalFormBackgroundStyled, EyeIcon, PersonalFormContent, PersonalFormStyled, PersonalFormWrapper, PersonalIcon, PersonalItemContentItem, PersonalItemContentItemInput, PersonalItemContentItemSubTitle, PersonalItemContentSubmit, PersonalTitle, GridTable, GridTableElement, GridWrapper, GridTableElementBackground, GridTableElementTitle, AmountOfFreePlaces } from "./personalFormStyles";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import Spinner from "../Spinner/Spinner";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
const PersonalForm = memo(() => {
    const [isVisible, setIsVisble] = useState(false)
    const navigate = useNavigate()
    const [regState, setRegState] = useState({
        username: "",
        password: ""
    })
    const handleVisible = () => {
        setIsVisble(prev => !prev)
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

    const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
    const { data: oneUser, loading: loadingOneUser } = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
    })
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)

    console.log(oneUser)

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
        }).then(({ data }) => {
            console.log(data)
            setUsername('')
            setAge(0)
        })
    }
    const getAll = e => {
        e.preventDefault()
        refetch()
    }
   /* if(loading) {
        return <Spinner />
    }  */
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <PersonalFormWrapper>
              {loading && <Spinner />}
            <PersonalFormStyled>
                <PersonalTitle>Auth form</PersonalTitle>
                <PersonalFormContent>
                    <GridWrapper>
                        <GridTable>
                            {arr.map((item, index) => (
                                <GridTableElement onClick={() => setIsOpen(true)}>
                                    <GridTableElementTitle>
                                        {item} {index + 1}
                                    </GridTableElementTitle>
                                    <AmountOfFreePlaces>
                                        4/4
                                    </AmountOfFreePlaces>
                                    <GridTableElementBackground />
                                </GridTableElement>
                            ))}
                        </GridTable>
                    </GridWrapper>
                </PersonalFormContent>
                <PersonalFormBackgroundStyled />
            </PersonalFormStyled>
            <ModalWindow open={isOpen}
                onClose={() => setIsOpen(false)}>
                Contragulation! You have successfully changed your personal data!
            </ModalWindow>
        </PersonalFormWrapper>
    );
})

export default PersonalForm;
//Available tables for booking