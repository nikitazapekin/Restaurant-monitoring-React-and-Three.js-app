/*import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";

import { gql, useSubscription } from '@apollo/client';

const USER_CREATED_SUBSCRIPTION = gql`
subscription {
userCreated {
  id
  username
}
}
`;
const Homepage = () => {
    const { data, loading, error } = useSubscription(USER_CREATED_SUBSCRIPTION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const newUser = data.userCreated;
    return ( 
        <>
       <NavBar />
       <Layout>
       <Global />
       <WelcomeForm />
       <Footer />
    </Layout> 

<div>
      <h2>New User Created:</h2>
      {newUser!=undefined && (
<>
        <p>ID: {newUser.id}</p> 
   <p>Username: {newUser.username}</p> 
</>
      )}

    </div>
        </>
     );
}
 
export default Homepage; */

/*
query {
  currentNumber
}
*/


/*
import React from 'react';
import { gql, useSubscription } from '@apollo/client';
const CURRENT_NUMBER_SUBSCRIPTION = gql`
subscription IncrementingNumber {
  numberIncremented
}
`;


const Homepage = () => {
  const { data, loading, error } = useSubscription(CURRENT_NUMBER_SUBSCRIPTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(data)

  return (<>
  <p>Current Number: {data.numberIncremented}</p>;
  </>) 
};

export default Homepage;
*/




/*
import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const CURRENT_NUMBER_SUBSCRIPTION = gql`
  subscription IncrementingNumber {
    numberIncremented
  }
`;

const Homepage = () => {
  const { data, loading, error } = useSubscription(CURRENT_NUMBER_SUBSCRIPTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Проверяем, что данные существуют и не являются null
  if (!data || data.numberIncremented === null) {
    return null;
  }

  return (
    <>
      <p>Current Number: {data.numberIncremented}</p>
    </>
  );
};

export default Homepage;
*/







import React, { useState } from 'react';
import { gql, useSubscription } from '@apollo/client';

const CURRENT_NUMBER_SUBSCRIPTION = gql`
  subscription IncrementingNumber {
    numberIncremented
  }
`;

const Homepage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { data, loading, error } = useSubscription(
    CURRENT_NUMBER_SUBSCRIPTION,
    {
      skip: !isSubscribed  
    }
  );

  const handleClick = () => {
    setIsSubscribed(true);  
  };

  if (!isSubscribed) {
    return (
      <button onClick={handleClick}>Subscribe</button>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 
  if (!data || data.numberIncremented === null) {
    //return null;
  }

  return (
    <>
      <p>Current Number: {data.numberIncremented}</p>
    </>
  );
};

export default Homepage;
