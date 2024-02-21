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

//import { useSubscription } from "@apollo/client";

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

export default Homepage; */









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

  // Если данные не готовы или numberIncremented равно null, отображаем сообщение ожидания
  if (!data || data.numberIncremented === null) {
    return <p>Waiting for data...</p>;
  }

  return (
    <>
      <p>Current Number: {data.numberIncremented}</p>
    </>
  );
};

export default Homepage;
*/
/*
import React, { useState } from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';
const GET_CURRENT_NUMBER = gql`
  query GetCurrentNumber {
    currentNumber
  }
`;

const CURRENT_NUMBER_SUBSCRIPTION = gql`
subscription IncrementingNumber {
  currentNumber
 }
`; 
const GetCurrentNumberComponent = () => {
  const [currentNumber, setCurrentNumber] = useState(null);

  // Функция для выполнения запроса
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_NUMBER);
  const { data1, loading1, error1 } = useSubscription(CURRENT_NUMBER_SUBSCRIPTION);

  // Функция для обновления текущего числа при получении данных
  if (data && data.currentNumber !== currentNumber) {
    setCurrentNumber(data.currentNumber);
  }

  // Обработчик нажатия кнопки, который вызывает повторное выполнение запроса
  const handleClick = () => {
    refetch();
  };

  // Вывод компонента
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Current Number: {currentNumber}</p>
          <button onClick={handleClick}>Get Current Number</button>
          {data1!=undefined && data1.currentNumber != null && (

            <p>Current Numbeeeeeeer subscribtions:  {data1.currentNumber}</p>
          )}
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default GetCurrentNumberComponent;

*/

/*
import React, { useEffect } from 'react';
import { useSubscription, gql, useQuery } from '@apollo/client';
const INCREMENTING_NUMBER_SUBSCRIPTION = gql`
  subscription IncrementingNumber {
    currentNumber
  }
`;
const GET_CURRENT_NUMBER = gql`
  query GetCurrentNumber {
    currentNumber
  }
`;

const Homepage = () => {
  const { data, loading, error } = useSubscription(INCREMENTING_NUMBER_SUBSCRIPTION);
  const { loading1, error1, data1, refetch } = useQuery(GET_CURRENT_NUMBER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
 

  const handleClick = async () => {
    await refetch();
    console.log("DATA!" + JSON.stringify(data1));
  };
 
  return (
<>
<button onClick={handleClick}>Get Current Number</button>
    <p>Current Number: {data.currentNumber}</p>;


    {data1!=undefined && data1.currentNumber != null && (

<p>Current Numbeeeeeeer subscribtions:  {data1.currentNumber}</p>

    )}
</>
  ) 
}
export default Homepage */

/*
import React, { useEffect } from 'react';
import { useSubscription, gql, useQuery } from '@apollo/client';

const INCREMENTING_NUMBER_SUBSCRIPTION = gql`
  subscription IncrementingNumber {
    currentNumber
  }
`;

const GET_CURRENT_NUMBER = gql`
  query GetCurrentNumber {
    currentNumber
  }
`;

const Homepage = () => {
  const { data, loading, error } = useSubscription(INCREMENTING_NUMBER_SUBSCRIPTION);
  const { loading: loading1, error: error1, data: data1, refetch } = useQuery(GET_CURRENT_NUMBER);

  const handleClick = () => {
    refetch();
  };

  useEffect(() => {
    console.log("DATA!", data1);
  }, [data1]);

  if (loading || loading1) return <p>Loading...</p>;
  if (error || error1) return <p>Error: {error ? error.message : error1.message}</p>;

  return (
    <>
      <button onClick={handleClick}>Get Current Number</button>
      <p>Current Number: {data.currentNumber}</p>

      {data1 && data1.currentNumber !== null && (
        <p>Current Number (from subscription): {data1.currentNumber}</p>
      )}
    </>
  );
};

export default Homepage;
 */



import Footer from "../../components/Footer/footer";
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
   
    return ( 
        <>
       <NavBar />
       <Layout>
       <Global />
       <WelcomeForm />
       <Footer />
    </Layout> 

</>
     );
}
 
export default Homepage;