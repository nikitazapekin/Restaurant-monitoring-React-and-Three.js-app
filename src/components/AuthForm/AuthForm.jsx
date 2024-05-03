/*
import { Formik, Form, Field, ErrorMessage } from "formik";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import * as Yup from "yup";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useNavigate } from "react-router-dom";
import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle, EyeIconWrapper } from "./AuthFormStyles";
import { useEffect } from "react";
const AuthForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };
    const [newUser] = useMutation(CREATE_USER);
    const addUser = async (event, values) => {
      event.preventDefault()
        try {
            const { data } = await newUser({
                variables: {
                    input: {
                        username: values.email,
                        password: values.password
                    }
                }
            });
            const personalData = { username: values.email, id: data.createUser.id };
            sessionStorage.setItem('personalData', JSON.stringify(personalData));
            navigate(`/personal/${data.createUser.id}`);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };
    const initialValues = {
        email: "",
        password: ""
    };
    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars min")
    });
useEffect(()=> {
  const storedData = sessionStorage.getItem('personalData');
  if (storedData) {
      const parsedData = JSON.parse(storedData);
      navigate(`/personal/${parsedData.id}`)
  }
}, [])
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, handleSubmit } = formik;
                return (
                    <AuthFormWrapper>
                        <AuthFormStyled>
                            <AuthTitle>Auth form</AuthTitle>
                            <Form 
                            >
                                <AuthFormBackgroundStyled />
                                <AuthFormContent>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="email">Email</AuthItemContentItemSubTitle>
                                        <AuthIcon  src={User} alt="user"/>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Type email"
                                            color={(isValid)}
                                        />
                                        <ErrorMessage name="email" component="div" className="error" style={{color: "red"}} />
                                    </AuthItemContentItem>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="password">Password</AuthItemContentItemSubTitle>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type={isVisible ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="Type password"
                                         color={(isValid)}
                                            required
                                        />
                                        <EyeIcon onClick={handleVisible} src={isVisible ? Visible : Hidden} alt="user" />
                                        <ErrorMessage name="password" component="div" className="error"   style={{color: "red"}}/>
                                    </AuthItemContentItem>
                                    <AuthItemContentSubmit
                                        type="submit"
                                        disabled={!(dirty && isValid)}
                                        onClick={e => {addUser(e,  formik.values) }}
                                    >
                                        Submit
                                    </AuthItemContentSubmit>
                                </AuthFormContent>
                            </Form>
                        </AuthFormStyled>
                    </AuthFormWrapper>
                );
            }}
        </Formik>
    );
};
export default AuthForm;



*/



import { Formik, Form, Field, ErrorMessage } from "formik";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import * as Yup from "yup";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useNavigate } from "react-router-dom";
//import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle, EyeIconWrapper } from "./AuthFormStyles";
import { useEffect } from "react";
import { AuthComponent, AuthInner, AuthInnerForm, AuthInnerFormItem, AuthInnerFormItemBtn, AuthInnerFormItemForm, AuthInnerFormItemFormInput, AuthInnerFormItemFormTitle, AuthInnerFormItemForms, AuthInnerFormItemTitle, FormElement, FormElementInput, FormElementTitle, RadialGradient, RestaurantComponentBackground } from "./AuthFormStyles";
import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
const AuthForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };
    const [newUser] = useMutation(CREATE_USER);
    const addUser = async (event, values) => {
        event.preventDefault()
        try {
            const { data } = await newUser({
                variables: {
                    input: {
                        username: values.email,
                        password: values.password
                    }
                }
            });
            const personalData = { username: values.email, id: data.createUser.id };
            sessionStorage.setItem('personalData', JSON.stringify(personalData));
            navigate(`/personal/${data.createUser.id}`);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };
    const initialValues = {
        email: "",
        password: ""
    };

    useEffect(() => {
        console.log(initialValues)
    }, [initialValues])
    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars min")
    });
    useEffect(() => {
        const storedData = sessionStorage.getItem('personalData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            navigate(`/personal/${parsedData.id}`)
        }
    }, [])
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, handleSubmit } = formik;
                return (
                    <AuthComponent>
                        <RestaurantComponentBackground src={Background} />
                        <RadialGradient />
                        <AuthInner>
                            <AuthInnerForm>
                                <AuthInnerFormItem>
                                    <AuthInnerFormItemTitle>
                                        Auth form
                                    </AuthInnerFormItemTitle>
                                </AuthInnerFormItem>

                                <AuthInnerFormItem>
                                    <AuthInnerFormItemForms>


                                        <FormElement>
                                            <FormElementTitle>
                                                Login:
                                            </FormElementTitle>
                                            {/*
                                            <FormElementInput placeholder="Type login..." />
                */}
                                            <Field
                                                as={FormElementInput}
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Type email"
                                                color={(isValid)}
                                                required
                                            />
                                            <ErrorMessage name="email" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />
                                        </FormElement>
                                        <FormElement>
                                            <FormElementTitle>
                                                Password:
                                            </FormElementTitle>
                                            <Field
                                                as={FormElementInput}
                                                type={isVisible ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder="Type password"
                                                color={(isValid)}
                                                required
                                            />
                                            <ErrorMessage name="password" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />
                                        </FormElement>
                                    </AuthInnerFormItemForms>
                                </AuthInnerFormItem>

                                <AuthInnerFormItem>
                                    <AuthInnerFormItemBtn
                                        type="submit"
                                        disabled={!(dirty && isValid)}
                                        onClick={e => { addUser(e, formik.values) }}
                                   //     style={{ color: (dirty && isValid) ? "red" : "#000" }}
                                    >
                                        Submit
                                    </AuthInnerFormItemBtn>
                                </AuthInnerFormItem>
                            </AuthInnerForm>
                        </AuthInner>
                    </AuthComponent>
                );
            }}
        </Formik>
    );
};
export default AuthForm;

/*
                    <AuthFormWrapper>
                    <AuthFormStyled>
                            <AuthTitle>Auth form</AuthTitle>
                            <Form 
                            >
                                <AuthFormBackgroundStyled />
                                <AuthFormContent>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="email">Email</AuthItemContentItemSubTitle>
                                        <AuthIcon  src={User} alt="user"/>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Type email"
                                            color={(isValid)}
                                        />
                                        <ErrorMessage name="email" component="div" className="error" style={{color: "red"}} />
                                    </AuthItemContentItem>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="password">Password</AuthItemContentItemSubTitle>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type={isVisible ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="Type password"
                                         color={(isValid)}
                                            required
                                        />
                                        <EyeIcon onClick={handleVisible} src={isVisible ? Visible : Hidden} alt="user" />
                                        <ErrorMessage name="password" component="div" className="error"   style={{color: "red"}}/>
                                    </AuthItemContentItem>
                                    <AuthItemContentSubmit
                                        type="submit"
                                        disabled={!(dirty && isValid)}
                                        onClick={e => {addUser(e,  formik.values) }}
                                    >
                                        Submit
                                    </AuthItemContentSubmit>
                                </AuthFormContent>
                            </Form>
                        </AuthFormStyled>
                    </AuthFormWrapper>
                */