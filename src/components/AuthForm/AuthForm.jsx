/*import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle } from "./AuthFormStyles";
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
import isAuthHook from "../../hooks/isAuthHook";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
    const handleChange = (event) => {
       
        const { name, value } = event.target;
        console.log(value)
        setRegState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
       const {data:oneUser} = useQuery(GET_ONE_USER, {
        variables: {
           id: 1
        }
    }) 
    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)
    console.log("ONE USER"+JSON.stringify(oneUser)) 
    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username: regState.username, password: regState.password
                }
            }
        }).then(({data}) => {
            const personalData = { username: regState.username, id: data.createUser.id };
     
       sessionStorage.setItem('personalData', JSON.stringify(personalData));
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
    }

    useEffect(()=> {
        const storedData = sessionStorage.getItem('personalData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            navigate(`/personal/${parsedData.id}`)
        }
    }, [])

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
    
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log("VALLS")
          console.log(values);
        }}
      >
        {(formik) => {  const { errors, touched, isValid, dirty } = formik;
         // return (
    return (
        <AuthFormWrapper>
     
            <AuthFormStyled>
                <AuthTitle>Auth form</AuthTitle>
                <Form>

                <AuthFormContent>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle>Username</AuthItemContentItemSubTitle>
                        <AuthIcon  src={User} alt="user"/>
                     <AuthItemContentItemInput 
                     //name="username"
                     placeholder="Type username" 
                   //  onChange={(event)=>handleChange(event)}
                   type="email"
                   name="email"
                   id="email"
                     required
                     />
                                  <ErrorMessage name="email" component="span" className="error" />
                    </AuthItemContentItem>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle>Password</AuthItemContentItemSubTitle>
                        <EyeIcon onClick={handleVisible}  src={  isVisible ? Visible : Hidden} alt="user"/>
                     <AuthItemContentItemInput name="password" placeholder="Type password"  
                     type={isVisible ? "text" : "password"}
                   //  onChange={(event)=>handleChange(event)}

                 
                   
                   id="password"
                     required
                     />

<ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                  />
                    </AuthItemContentItem>
                    <AuthItemContentSubmit
                  //  onClick={(event)=> handleNavigate(event)}
                    type="submit"
                    >Submit 
                  
                    </AuthItemContentSubmit>
                </AuthFormContent>
                <AuthFormBackgroundStyled />
                </Form>
            </AuthFormStyled>
        </AuthFormWrapper>
            
            )
          }}
            </Formik>
    );
} 

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
import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle } from "./AuthFormStyles";
import { validateSchema } from "graphql";
import { useEffect } from "react";
const AuthForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [regState, setRegState] = useState({
     //   username: "",
     email: "",
        password: ""
    });
    const handleChange = (event) => {
       
      const { name, value } = event.target;
      console.log(value)
      setRegState(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };

    const { data: oneUser } = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
    });
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
const test = (event, initialValues) => {
  event.preventDefault()
  console.log("TEST" , initialValues)
}

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
                            <Form // onSubmit={handleSubmit}
                            >
                                <AuthFormBackgroundStyled />
                                <AuthFormContent>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="email">Email</AuthItemContentItemSubTitle>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type="email"
                                          //  value={regState.email}
                                            name="email"
                                            id="email"
                                            placeholder="Type username"
                                          //  onChange={(event)=>handleChange(event)}
                                            required
                                        />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </AuthItemContentItem>
                                    <AuthItemContentItem>
                                        <AuthItemContentItemSubTitle htmlFor="password">Password</AuthItemContentItemSubTitle>
                                        <Field
                                            as={AuthItemContentItemInput}
                                            type={isVisible ? "text" : "password"}
                                            name="password"
                                         //   value={regState.password}
                                            id="password"
                                         //   onChange={(event)=>handleChange(event)}
                                            placeholder="Type password"
                                        />
                                        <EyeIcon onClick={handleVisible} src={isVisible ? Visible : Hidden} alt="user" />
                                        <ErrorMessage name="password" component="div" className="error" />
                                    </AuthItemContentItem>
                                    <AuthItemContentSubmit
                                        type="submit"
                                        disabled={!(dirty && isValid)}

                                        onClick={e => {addUser(e,  formik.values) }}
                                     //   onClick={(dirty && isValid) ? (event) =>addUser(event,{email: regState.username,password: regState.password}) : "" }
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







/*

import { Formik, Form, Field, ErrorMessage } from "formik";
import User from "../../assets/user.png";
import Hidden from "../../assets/hidden.png";
import Visible from "../../assets/visible.png";
import * as Yup from "yup";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useNavigate } from "react-router-dom";
import {
  AuthFormBackgroundStyled,
  EyeIcon,
  AuthFormContent,
  AuthFormStyled,
  AuthFormWrapper,
  AuthIcon,
  AuthItemContentItem,
  AuthItemContentItemInput,
  AuthItemContentItemSubTitle,
  AuthItemContentSubmit,
  AuthTitle,
} from "./AuthFormStyles";

const AuthForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [newUser] = useMutation(CREATE_USER);

  const addUser = async (values) => {
    try {
      const { data } = await newUser({
        variables: {
          input: {
            username: values.email,
            password: values.password,
          },
        },
      });
      const personalData = { username: values.email, id: data.createUser.id };
      sessionStorage.setItem("personalData", JSON.stringify(personalData));
      navigate(`/personal/${data.createUser.id}`);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars min"),
  });

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values, { setSubmitting }) => {
        addUser(values);
        setSubmitting(false);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, isSubmitting } = formik;
        return (
          <AuthFormWrapper>
            <AuthFormStyled>
              <AuthTitle>Auth form</AuthTitle>
              <Form>
                <AuthFormBackgroundStyled />
                <AuthFormContent>
                  <AuthItemContentItem>
                    <AuthItemContentItemSubTitle htmlFor="email">
                      Username
                    </AuthItemContentItemSubTitle>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Type username"
                      as={AuthItemContentItemInput}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </AuthItemContentItem>
                  <AuthItemContentItem>
                    <AuthItemContentItemSubTitle htmlFor="password">
                      Password
                    </AuthItemContentItemSubTitle>
                    <Field
                      type={isVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Type password"
                      as={AuthItemContentItemInput}
                    />
                    <EyeIcon
                      onClick={handleVisible}
                      src={isVisible ? Visible : Hidden}
                      alt="user"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </AuthItemContentItem>
                  <AuthItemContentSubmit
                    type="submit"
                    disabled={isSubmitting || !(dirty && isValid)}
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
{/*
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
import { AuthFormBackgroundStyled, EyeIcon, AuthFormContent, AuthFormStyled, AuthFormWrapper, AuthIcon, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, AuthTitle } from "./AuthFormStyles";
const AuthForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [regState, setRegState] = useState({
        username: "",
        password: ""
    });
    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };

    const { data: oneUser } = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
      });
    const [newUser] = useMutation(CREATE_USER);

    const addUser = async (values) => {
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
const test=(e) => {
  e.preventDefault()
  console.log(1)
}
    return (
         
      <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => addUser(values)}
        >

(formik) => {  const { errors, touched, isValid, dirty } = formik;
        return (
         
      <AuthFormWrapper>
      <AuthFormStyled>
      <AuthTitle>Auth form</AuthTitle>
              <Form>
                <AuthFormBackgroundStyled />
                <AuthFormContent>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle htmlFor="email">Username</AuthItemContentItemSubTitle>

<Field
      as={AuthItemContentItemInput} 
      type="email"
      name="email"
      id="email"
      placeholder="Type username"
      required
    />
                        <ErrorMessage name="email" component="div" className="error" />
                    </AuthItemContentItem>
                    <AuthItemContentItem>
                        <AuthItemContentItemSubTitle htmlFor="password">Password</AuthItemContentItemSubTitle>
                        <Field
                         as={AuthItemContentItemInput} 
                        type={isVisible ? "text" : "password"} name="password" id="password" placeholder="Type password" />
                        <EyeIcon onClick={handleVisible}  src={  isVisible ? Visible : Hidden} alt="user"/>
                        <ErrorMessage name="password" component="div" className="error" />
                    </AuthItemContentItem>
                    <AuthItemContentSubmit type="submit"
                         disabled={!(dirty && isValid)}
                    onClick={(e)=> test(e)}
                    >Submit</AuthItemContentSubmit>
                </AuthFormContent>
                </Form>

         </AuthFormStyled>
                </AuthFormWrapper>
            )
        </Formik>
    );
            
};

export default AuthForm;

*/}



/*
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useNavigate } from "react-router-dom";
import { AuthFormWrapper, AuthFormStyled, AuthTitle, AuthFormContent, AuthItemContentItem, AuthItemContentItemInput, AuthItemContentItemSubTitle, AuthItemContentSubmit, EyeIcon, AuthIcon, AuthFormBackgroundStyled } from "./AuthFormStyles";

const AuthForm = () => {
  const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [newUser] = useMutation(CREATE_USER);

    const handleVisible = () => {
        setIsVisible(prev => !prev);
    };
    
    const addUser = async (values) => {
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

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => addUser(values)}
        >
            {(formik) => (
                <AuthFormWrapper>
                    <AuthFormStyled>
                        <AuthTitle>Auth form</AuthTitle>
                        <Form>
                            <AuthFormContent>
                                <AuthItemContentItem>
                                    <AuthItemContentItemSubTitle>Username</AuthItemContentItemSubTitle>
                                    <AuthIcon src={User} alt="user" />
                                    <Field type="email" name="email" placeholder="Type username" component={AuthItemContentItemInput} />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </AuthItemContentItem>
                                <AuthItemContentItem>
                                    <AuthItemContentItemSubTitle>Password</AuthItemContentItemSubTitle>
                                    <EyeIcon onClick={handleVisible} src={isVisible ? Visible : Hidden} alt="user" />
                                    <Field type={isVisible ? "text" : "password"} name="password" placeholder="Type password" component={AuthItemContentItemInput} />
                                    <ErrorMessage name="password" component="div" className="error" />
                                </AuthItemContentItem>
                                <AuthItemContentSubmit type="submit">Submit</AuthItemContentSubmit>
                            </AuthFormContent>
                            <AuthFormBackgroundStyled />
                        </Form>
                        </AuthFormStyled>
                </AuthFormWrapper>
            )}
        </Formik>
    );
};

export default AuthForm;
*/




/*
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./index.scss";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

const initialValues = {
  email: "",
  password: ""
};

const AuthForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {  const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <Form>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
*/