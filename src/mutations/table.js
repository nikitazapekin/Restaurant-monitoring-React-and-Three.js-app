import {gql} from '@apollo/client'
export const BOOKING_ACTION = gql`
mutation CreateBookingAction($input: BookingActionObject ) {
    createBookingAction(input: $input) {
      tableID
      from
      to
      amountOfChairs
      dataOfBooking
    }
  }
`