

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRef, useState } from "react";
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLE_INFO } from '../query/table';
import { BOOKING_ACTION } from '../mutations/table';
const GetTableInfo = ({ clickedElement, onClose, month, year, clickedDay }) => {
    const { data: oneUser, refetch } = useQuery(GET_TABLE_INFO, {
        variables: {
            id: Number(clickedElement),
            date:  String(""+clickedDay+"-"+month+"-"+year)
        },
    })
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = today.toLocaleDateString('en-US', options);
    const [time, setTime] = useState({
        from: "",
        to: "",
        chairs: "1"
    })
    const handleTime = (event) => {
        setTime(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const hasEnglishLetters = (str) => {
        return /[a-zA-Zа-яА-Я]/.test(str);
    }
    const [newBookingElement] = useMutation(BOOKING_ACTION)
    const handleBook = () => {
        if (hasEnglishLetters(time.from) || hasEnglishLetters(time.to) || time.to.length != 5 || time.from.length !=5 || time.chairs.length == 0 || hasEnglishLetters(time.chairs)) {
       setErrorMessage("Entered data is incorrect")
        }
       else  if(Number(time.chairs)>Number(oneUser.getTableInfo.amountOfChairs)){
            setErrorMessage("Please enter fewer places")
        } 
       else  if(time.to[2]!=":" || time.from[2]!=":"){
            setErrorMessage("Please enter time")
      }
            else {
            onClose()
            newBookingElement({
                variables: {
                    input: {
                        tableID: Number(clickedElement),
                        from: time.from,
                        to: time.to,
                        dataOfBooking: ""+clickedDay+"-"+month+"-"+year,
                        amountOfChairs: Number(time.chairs)
                    }
                }
            }).then(({ data }) => {
                console.log(data)
            })
        }
    }
    useEffect(() => {
        refetch()
    }, [handleBook])
    const handleRefreshData = () => {
        refetch()
    };
    return { handleTime, oneUser, handleBook, isError, currentDate, handleRefreshData, refetch, errorMessage }
}
export default GetTableInfo