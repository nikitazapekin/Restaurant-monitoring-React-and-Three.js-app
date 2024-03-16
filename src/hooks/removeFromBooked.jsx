import { REMOVE_FROM_BOOKED } from "../mutations/table"
import { useMutation } from "@apollo/client"
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
        console.log("MESSAGE"+data.createBookingAction.errorMessage)
      
    })
}
return {handleRemove}
}
export default useRemoveFromBooked