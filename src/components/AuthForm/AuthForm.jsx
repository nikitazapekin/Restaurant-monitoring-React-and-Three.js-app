import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle } from "./AuthFormStyles";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import { useState } from "react";
const AuthForm = () => {
    const [isVisible, setIsVisble] =useState(false)
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
        console.log(123)
        const { name, value } = event.target;
        console.log(value)
        setRegState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    return (
        <AuthFormWrapper>
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
                    type="submit"
                    >Submit</AuthItemContentSubmit>
                </AuthFormContent>
                <AuthFormBackgroundStyled />
            </AuthFormStyled>
        </AuthFormWrapper>
    );
}

export default AuthForm;