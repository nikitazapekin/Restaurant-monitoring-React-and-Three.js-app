import { REMOVE_FROM_BOOKED } from "../mutations/table"
import { useMutation } from "@apollo/client"
import { CONFIRM_TABLE } from "../mutations/confirm"
import { useParams } from "react-router-dom"
const useRemoveFromBooked = () => {
        const [newBookingElement] = useMutation(REMOVE_FROM_BOOKED)
const handleRemove = (item) => {
console.log(JSON.stringify(item))
    newBookingElement({
        variables: {
            input: {
                tableID: Number(item.tableID),
                from: item.from,
                 to: item.to,
                 amountOfChairs: 3,
                 dataOfBooking: item.dataOfBooking, 
                 isBookedBy: item.isBookedBy 
                 
            }
        }
    }).then(({ data }) => {
        console.log(data)
       
      
    })
}




const {id} = useParams()
const [confirmElement] = useMutation(CONFIRM_TABLE);
const handleConfirmTable = (item) => {
    console.log(111);
    confirmElement({
        variables: {
            input: {
                tableID: item.tableID,
                from: item.from,
                to: item.to,
                dataOfBooking: item.dataOfBooking,
                amountOfChairs: item.amountOfChairs,
                isBookedBy: id
            }
        }
    }).then(({ data }) => {
        console.log("DATA" + JSON.stringify(data));
    });  
}

return {handleRemove, handleConfirmTable}
}
export default useRemoveFromBooked