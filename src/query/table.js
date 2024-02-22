
import {gql} from '@apollo/client'

  export const GET_TABLE_INFO = gql`
  query getTableInfo($id: ID!){
    getTableInfo(id: $id) {
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
   