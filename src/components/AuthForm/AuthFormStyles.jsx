import styled from "styled-components";


export const AuthComponent = styled.div`
    

    height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: -1;
width: 100%;
`


export const RestaurantComponentBackground = styled.img`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;



`
export const RadialGradient = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(86.16% 64.2% at 32.35% 38.27%, rgb(15, 15, 15) 0%, rgb(117, 117, 117) 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`

export const AuthInner = styled.form`
display: grid;
grid-template-columns: minmax(300px, 440px);

width: 100%;
justify-content: center;
position: relative;
 
z-index: 11111; 

`
export const AuthInnerForm = styled.div`
 margin-top: 240px;
background-color:  #c29858;
min-height: 440px;
border-radius: 27px;
padding: 48px 55px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 row-gap: 55px;
`

export const AuthInnerFormItem = styled.div`
width: 100%;
`

export const AuthInnerFormItemTitle = styled.div`
font-weight: 800;
font-size: 36px;
//line-height: 75%;
font-family: "Inter", sans-serif;
color: #000;
text-align: left;
`



export const AuthInnerFormItemForms = styled.div` 

display: grid;
grid-template-columns: minmax(200px, 341px);
row-gap: 6.71px;
`



export const FormElement = styled.div`
  // background-color: red;
    display: flex;
    flex-direction: column;

`


export const FormElementTitle = styled.div`
   font-weight: 400;
font-size: 20px;
line-height: 133%;
color: #000;
font-family: "Inter", sans-serif;
`


export const FormElementInput = styled.input`
border: 1.34px solid #e2dcff;
border-radius: 5px;
padding: 8px 16px;
width:100%;
height: 43px;
box-shadow: inset 0 5px 13px 0 rgba(0, 0, 0, 0.25);
background-color: transparent;
cursor: pointer;


font-weight: 400;
font-size: 20px;
line-height: 133%;
color: #424242;
font-family: "Inter", sans-serif;
outline: none;
`
export const AuthInnerFormItemForm = styled.div` 
display: flex;
flex-direction: column;
// flex-basis: 343px;
// background-color: red;
//background-color: red;
`

export const AuthInnerFormItemFormTitle = styled.p` 
 font-weight: 400;
font-size: 20px;
color: #000;
font-family: "Inter", sans-serif;
`


export const AuthInnerFormItemFormInput = styled.input` 
border: 1.34px solid #e2dcff;
border-radius: 5px;
padding: 8px 16px;
// padding-left: 16px;
outline: none;
height: 43px;
background-color: transparent;
box-shadow: inset 0 5px 13px 0 rgba(0, 0, 0, 0.25);
&::placeholder {
    font-weight: 400;
font-size: 20px;
//line-height: 133%;
color: #424242;
font-family: "Inter", sans-serif;
}
`

export const AuthInnerFormItemBtn = styled.button`
    margin: 0 auto;
    border-radius: 20px;
//padding: 10px 21px;
padding: 18px 62px;
box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.25);
font-weight: 600;
font-size: 21px;
display: flex;
justify-content: center;
align-items: center;
line-height: 125%;
 cursor: pointer;
color: #000;
border: none;
outline: none;
background: #e0b574;
//margin-top: 55px;
`