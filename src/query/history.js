

import { gql } from '@apollo/client'
/*
export const GET_HISTORY = gql`
query getUser($id: ID!){
getYourBookedTablesHistory(user: $id) {
    history {
     dataOfBooking
    amountOfChairs
    isBookedBy
    from
    to
    isConfirmed
  }
    

}
}
`  */

export const GET_HISTORY = gql`
query getUser($id: String!){ 
 getYourBookedTablesHistory(user: $id) {
     history {
      dataOfBooking
     amountOfChairs
     isBookedBy
     from
     timeForBooking
     to
     isConfirmed
     tableID
   }     
 }
}
`








/*
export const GET_HISTORY = gql`
   query getUser($id: ID!){
    getYourBookedTablesHistory(id: $id) {
        history {
         dataOfBooking
        amountOfChairs
        isBookedBy
        from
        to
        isConfirmed
      }
        

    }
 }
` */