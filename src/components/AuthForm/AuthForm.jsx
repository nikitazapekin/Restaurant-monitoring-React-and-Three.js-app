
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



*/

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


*/










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

*/


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
//import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle, EyeIconWrapper } from "./AuthFormStyles";
import { useEffect } from "react";
import { AuthComponent, AuthInner, AuthInnerForm, AuthInnerFormItem, AuthInnerFormItemBtn, AuthInnerFormItemForm, AuthInnerFormItemFormInput, AuthInnerFormItemFormTitle, AuthInnerFormItemForms, AuthInnerFormItemTitle, FormElement, FormElementInput, FormElementTitle, RadialGradient, RestaurantComponentBackground } from "./AuthFormStyles";
import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
import styles from "./index.module.scss"

import Arrow from "../../assets/arrow.png"
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
                    <>

                        <div className={styles.form}>
                            <div className={styles.form__inner}>
                                <h1 className={styles.form__title}>
                                    Auth form
                                </h1>

                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <p className={styles.field__title}>
                                            Login
                                        </p>


                                        <Field
                                         component="input"
                                         className={styles.field__input}
                                                //as={FormElementInput}
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Type email"
                                                color={(isValid)}
                                                required
                                            />
                                            <ErrorMessage name="email" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />



                                     
                                    
                                    </div>

                                    <div className={styles.field}>
                                        <p className={styles.field__title}>
                                            Password
                                        </p>

                                        <Field
                                         component="input"
                                         className={styles.field__input}
                                             //   as={FormElementInput}
                                                type={isVisible ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder="Type password"
                                                color={(isValid)}
                                                required
                                            />
                                            <ErrorMessage name="password" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />
 
                                    </div>
                                </div>


                                <div className={styles.form__submit}
                                   type="submit"
                                   disabled={!(dirty && isValid)}
                                   onClick={e => { addUser(e, formik.values) }}
                                >
                                    <p className={styles.form__submit__text}>
                                        Submit
                                    </p>

                                    <div className={styles.form__submit__icon}>
                                        <img  src={Arrow} />
                                    </div>
                                </div>
                                <div className={styles.form__background}></div>


                            </div>
                        </div>
                    </>

                );
            }}
        </Formik>
    );
};
export default AuthForm;
*/










import React, { useState, useEffect } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../../mutations/user";
import Arrow from "../../assets/arrow.png";
import styles from "./index.module.scss";

const AuthForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };
    const [newUser] = useMutation(CREATE_USER);

    const addUser = async (event, values) => {
        event.preventDefault();
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
        const storedData = sessionStorage.getItem('personalData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            navigate(`/personal/${parsedData.id}`);
        }
    }, []);

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars min")
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, handleSubmit } = formik;
                return (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.form__inner}>
                            <h1 className={styles.form__title}>Auth form</h1>
                            <div className={styles.fields}>
                                <div className={styles.field}>
                                    <p className={styles.field__title}>Login</p>
                                    <Field
                                        component="input"
                                        className={styles.field__input}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Type email"
                                        required
                                    />
                                    <ErrorMessage name="email" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />
                                </div>

                                <div className={styles.field}>
                                    <p className={styles.field__title}>Password</p>
                                    <Field
                                        component="input"
                                        className={styles.field__input}
                                        type={isVisible ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Type password"
                                        required
                                    />
                                    <ErrorMessage name="password" component="div" className="error" style={{ color: "#D11414", fontSize: "24px" }} />
                                </div>
                            </div>

                            <button
                                className={styles.form__submit}
                                type="submit"
                                disabled={!(dirty && isValid)}
                                onClick={e => addUser(e, formik.values)}
                            >
                                <p className={styles.form__submit__text}>Submit</p>
                                <div className={styles.form__submit__icon}>
                                    <img src={Arrow} alt="Arrow icon" />
                                </div>
                            </button>
                            <div className={styles.form__background}></div>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
};

export default AuthForm;

/*
{">"}
<div className={styles.auth}>

<img className={styles.auth__background} src={Background} alt="fon" />
<form action="" className={styles.form}>
        <div className={styles.form__background} >   </div>

        tyhjy
    <div className={styles.form__inner}>
        <h1 className={styles.form__title}>
            Auth form
        </h1>
        <div className={styles.form__inputs}>
            <div className={styles.form__element}>
                <p className={styles.form__element__title}>
                    Login
                </p>
                <input type="text" className={styles.form__element__title} placeholder="enter login..." />
            </div>
            <div className={styles.auth__element}>
                <p className={styles.form__element__title}>
                    Password
                </p>
                <input type="text" className={styles.form__element__title} placeholder="enter password..." />
            </div>

            <div className={styles.form__submit}>
                <p className={styles.form__submit__text}>
                    Submit
                </p>
                <div className={styles.form__submit__icon}>
                    {">"}
                </div>
            </div>

        </div>
        </div>
        </form>
</div>
                */