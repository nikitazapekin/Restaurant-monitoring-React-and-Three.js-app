

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRef, useState } from "react";
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLES_INFO } from '../query/table';
import { BOOKING_ACTION } from '../mutations/table';
import useCalendar from './useCalendar';
const GetTablesInfo = ({month, clickedDay, year}) => {
   // const GetTablesInfo = () => {
console.log("MONTH" +month, year, clickedDay)

const dd ="26"
const mm ="2"
const yy="2024"
console.log( `${clickedDay}-${month+1}-${year}`)
console.log( `${dd}-${mm}-${yy}`)
    const { data: allTables, refetch } = useQuery(GET_TABLES_INFO, {
        variables: {
           // date: `${dd}-${mm}-${yy}`
           // date: "25-2-2024"
         date: `${clickedDay}-${month+1}-${year}`
        },
    })  
    useEffect(()=> {
console.log("INFO"+JSON.stringify(allTables))
    }, [allTables])
const handleRefetch = () => {
    refetch()
}
    return {refetch, allTables, handleRefetch}
  
}
export default GetTablesInfo