
import {gql} from '@apollo/client'

  export const GET_TABLE_INFO = gql`
  query getTableInfo($id: ID!, $date: String!){
    getTableInfo(id: $id, date: $date) {
      id
      amountOfChairs
      timeForBooking {
      tableID
      dataOfBooking
      amountOfChairs
      from
      to
      }
    }
  }
  `;
   