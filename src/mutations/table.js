import {gql} from '@apollo/client'
export const BOOKING_ACTION = gql`
mutation CreateBookingAction($input: BookingActionObject ) {
createBookingAction(input: $input) {
  bookingElement {
    tableID
    from
    to
    amountOfChairs
    dataOfBooking
  }
  errorMessage
}
}
`
export const REMOVE_FROM_BOOKED = gql`
mutation RemoveFromBookedElements($input: BookingActionObject ) {
  removeFromBookedElements(input: $input ) {
    timeForBooking {
       tableID
      from
      to
      amountOfChairs
      dataOfBooking
      isBookedBy
    }
  }
  }
  `
/*
mutation RemoveFromBookedElements {
  removeFromBookedElements(input: {
    tableID: 2
    from: "12:00"
    to: "14:00"
    amountOfChairs: 3
    dataOfBooking: "20-3-2024"
    isBookedBy: "vw"
 } ) {
    timeForBooking {
       tableID
      from
      to
      amountOfChairs
      dataOfBooking
      isBookedBy
    }
  }
}
*/
