import { useState } from "react";
import React, { useEffect } from 'react';
import { useSubscription, gql, useQuery } from '@apollo/client';

const INCREMENTING_NUMBER_SUBSCRIPTION = gql`
  subscription IncrementingNumber {
    currentNumber
  }
`;
const useMonitoring = () => {
    const { data, loading, error } = useSubscription(INCREMENTING_NUMBER_SUBSCRIPTION);
//console.log(data.currentNumber)
return {data}
}
export default useMonitoring

/*

subscription Subscription {
  currentNumber
}
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