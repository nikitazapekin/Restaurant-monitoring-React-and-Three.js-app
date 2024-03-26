import {gql} from '@apollo/client'
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




export const CONFIRM_TABLE = gql`
mutation ConfigBookedElements($input: BookingActionObject ) {
    confirmBookedElements(input: $input ) {
    timeForBooking {
       tableID
      from
      to
      amountOfChairs
      dataOfBooking
      isBookedBy
      isConfirmed
    }
  }
  }
  `
/*
mutation ConfigBookedElements {
  confirmBookedElements(input: {
    tableID: 5
    from: "00:00"
    to: "00:00"
    amountOfChairs: 3
    dataOfBooking: "26-3-2024"
    isBookedBy: "1711437272186"
  }) {
   amountOfChairs
  }
}
*/