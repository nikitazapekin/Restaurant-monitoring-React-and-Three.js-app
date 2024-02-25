
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
    export const GET_TABLES_INFO = gql`
     query getInfornationAboutAbilityOfBooking($date: String!){
     
  getInfornationAboutAbilityOfBooking(date: $date)
 
     }
 
  
    `; 


  /*  export const GET_TABLES_INFO = gql`
query {
  getInfornationAboutAbilityOfBooking(date: "25-2-2024")
}

`; 
*/
/*
query {
  getInfornationAboutAbilityOfBooking(date: "25-2-2024")
}

   export const GET_TABLES_INFO = gql`
   query getInfornationAboutAbilityOfBooking($date: String!){
    getInfornationAboutAbilityOfBooking(date: $date) {
      id
    amountOfChairs
    timeForBooking {
      from
      to
    }
    }

   }
   `;
    
*/