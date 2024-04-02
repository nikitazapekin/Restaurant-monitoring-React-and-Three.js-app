import { gql } from '@apollo/client'
export const REPLACE__FROM__HISTORY = gql`
mutation RemoveFromBookedElements($input: BookingActionObject ) {
    replaceFromHistory(input: $input ) {
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

// replaceFromHistory: (parent, { input }) => {