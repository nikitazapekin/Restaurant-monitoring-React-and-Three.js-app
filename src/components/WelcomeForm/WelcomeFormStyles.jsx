


import styled from "styled-components";
export const WelcomeFormStyled = styled.div`
    width: 70%;
    position: relative;
    height: auto;
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px
`
export const WelcomeFormBackgroundStyled = styled.div`
    border-radius:20px;
    width: 100%;
height: 100%;
position: absolute;
top:0 ;
left:  0;
opacity: 0.4;
background-color: rgba(202, 204, 219);
z-index: 0;
`
export const WelcomeFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const WelcomeTitle = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    position: relative;
    z-index: 123;
  font-size: 48px;
`
export const WelcomeTables = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
  font-size: 32px;
`

export const WelcomeFormContent = styled.form`
position: relative;
    width: 100%;
   min-height: 200px;
    display: flex;
    justify-content:space-between;
    background-color: #b9b9b9;
    align-items: center;
    border-radius: 20px;
   // flex-direction: column;
    gap: 40px;
`



export const ManImage = styled.img`
max-width: 400px;
width: 100%;
height: auto;
    position: relative;
    `
    export const MessageWrapper = styled.div`
    width: 60%;
    min-height: 200px;
    
    `
    export const WelcomeMessage =styled.div`
    width:60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    min-height: 200px;
    position: relative;
    user-select: none;
    text-align: center;
    margin-right:20px;
    padding: 5px;
    border-radius: 20px;
    font-size: 32px;
    color: black;
    z-index: 111;
    `
/*
export const WelcomeFormMessage = styled.div`
    width: 100%;
    max-width: 600px;
position: absolute;
    height:100%;
  //  max-height: 100%;
 //   display: flex;
 //   justify-content: space-between;
 //   gap: 40px;
   //
   // background-color: ;
`
*/
export const WelcomeFormMessageBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
//background-color: red;
background-color: #fff;
border-radius:20px;
//opacity: 0.3;

z-index: -11;
` 