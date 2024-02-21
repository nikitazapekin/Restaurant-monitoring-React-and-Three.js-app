import {gql} from '@apollo/client'

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id, username, password
        }
    }    

`
/*
export const GET_ONE_USER = gql`
    query getUser($id: ID){
        getUser(id: $id) {
            id, username
        }
    }    

`  */

export const GET_ONE_USER = gql`
    query getUser($id: ID!){
        getUser(id: $id) {
            id
            username
        }
    }
`;

/*
export const GET_USER_DATA =glb`
query {
    getUser(id: 1) {
      id
      username
    }
  }
` */