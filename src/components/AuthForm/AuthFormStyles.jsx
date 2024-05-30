import styled from "styled-components";

/*
export const AuthFormStyled = styled.div`
    width: 70%;
    position: relative;
    height: auto;
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 500px) {
        padding: 15px;
    }
`
export const AuthFormBackgroundStyled = styled.div`
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
export const AuthFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const AuthTitle = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
  font-size: 48px;
  @media screen and (max-width: 450px) {
    font-size: 27px;
  }
`
export const AuthFormContent = styled.form`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`
export const AuthItemContentItem = styled.div`
    
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

`
export const AuthItemContentItemInput = styled.input`
position: relative;
    width: 100%;
    height: 60px;
  //  color: gray;
  color: ${props => props.color ? "gray" : "red"};
    cursor: pointer;
    border-bottom: 2px solid  ${props => props.color ? "gray" : "red"};
    border-left: none;
    border-right: none;
    border-top: none;
    z-index: 221;
    background-color: transparent;
    outline: none;
    font-size: 32px;
    @media screen and (max-width: 530px) {
        font-size: 20px;
    }
`
export const AuthItemContentItemSubTitle = styled.p`
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
`
export const AuthItemContentSubmit = styled.button`
    width: 100%;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d1d1d1;
    font-size: 32px;
    position: relative;
    z-index: 212;
    border-radius: 20px;
    font-weight: 700;
`
export const AuthIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
top: 60px;
@media screen and (max-width: 530px) {
widt: 30px;
heigh:30px;
}
`
export const EyeIconWrapper = styled.div`
height: 100%;
display: flex ;
align-items: center;


`
export const EyeIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
cursor: pointer;
top: 60px;
@media screen and (max-width: 530px) {
width: 30px;
height: 30px;
}
`

*/

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


//z-index: 11;

`
export const RadialGradient = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(86.16% 64.2% at 32.35% 38.27%, rgb(15, 15, 15) 0%, rgb(117, 117, 117) 100%);
 // background-color: red;
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