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
const [currentTime, setCurrentTime] = useState("")
useEffect(()=> {
    if(data!=undefined) {

        setCurrentTime(data.currentNumber)
    }
}, [data])
return {
    currentTime
    }
}
export default useMonitoring

