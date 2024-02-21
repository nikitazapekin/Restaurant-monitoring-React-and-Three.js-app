import { PersonalFormBackgroundStyled, EyeIcon, PersonalFormContent, PersonalFormStyled, PersonalFormWrapper, PersonalIcon, PersonalItemContentItem, PersonalItemContentItemInput, PersonalItemContentItemSubTitle, PersonalItemContentSubmit, PersonalTitle, GridTable, GridTableElement, GridWrapper, GridTableElementBackground, GridTableElementTitle, AmountOfFreePlaces, PersonalTables } from "./personalFormStyles";
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
import { useNavigate, useParams } from "react-router-dom";
import { memo } from "react";
const PersonalForm = memo(() => {
const {id} =useParams()
        const { data: oneUser } = useQuery(GET_ONE_USER, {
        variables: {
          id: Number(id)
        }
    })
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isOpen, setIsOpen] = useState(false)
const [clickedElement, setClickedElement] = useState(1)

    const handleClick = (id) => {
        setIsOpen(true)
setClickedElement(id)
    }
    return (
        <PersonalFormWrapper>
          {/*    {loading && <Spinner />} */}
            <PersonalFormStyled>
                <PersonalTitle>Hello {oneUser!=undefined ? oneUser.getUser.username : ""}!</PersonalTitle>
                <PersonalTables>Our tables for booking:</PersonalTables>
                <PersonalFormContent>
                    <GridWrapper>
                        <GridTable>
                            {arr.map((item, index) => (
                                <GridTableElement onClick={() => handleClick(index+1)}>
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
            clickedElement={clickedElement}
                onClose={() => setIsOpen(false)}>
             
            </ModalWindow>
        </PersonalFormWrapper>
    );
})

export default PersonalForm;
//Available tables for booking