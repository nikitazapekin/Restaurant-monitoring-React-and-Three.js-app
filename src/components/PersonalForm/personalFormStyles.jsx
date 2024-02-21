import styled from "styled-components";
export const PersonalFormStyled = styled.div`
    width: 70%;
    position: relative;
    height: auto;
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px
`
export const PersonalFormBackgroundStyled = styled.div`
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
export const PersonalFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const PersonalTitle = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    position: relative;
    z-index: 123;
  font-size: 48px;
`
export const PersonalTables = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 700;
    font-size: 32px;
    position: relative;
    z-index: 123;
  font-size: 32px;
`
export const PersonalFormContent = styled.form`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`
export const PersonalItemContentItem = styled.div`
    
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

`
export const PersonalItemContentItemInput = styled.input`
position: relative;
    width: 100%;
    height: 60px;
    color: gray;
    cursor: pointer;
    border-bottom: 2px solid gray;
    border-left: none;
    border-right: none;
    border-top: none;
    z-index: 221;
    background-color: transparent;
    outline: none;
    font-size: 32px;
`
export const PersonalItemContentItemSubTitle = styled.p`
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
`
export const  PersonalItemContentSubmit = styled.button`
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
export const PersonalIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
top: 40px
`
export const EyeIcon = styled.img`
    position: absolute;
    right: 0;
width: 40px;
height: 40px;
z-index: 1222;
cursor: pointer;
top: 40px
`
export const GridWrapper = styled.div`
    width: 100%;
`
export const GridTable =  styled.div`
    height: auto;
    max-height: 80vh;
    overflow-y: scroll;
    position: relative;
    z-index: 1234;
   justify-items: center; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30%;
`
export const GridTableElement = styled.div`
    width: auto;
 height: auto;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
display: flex;
flex-direction: column;

&:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

`
export const GridTableElementBackground = styled.div`
border-radius: 10px;
background-color: rgba(
77, 78, 79
);
position: absolute;
left: 0;
height: 100%;
width: 100%;
top: 0;
z-index: 0;
opacity: 0.1;
`
export const  GridTableElementTitle = styled.p`
font-size: 32px;
position: relative
`
export const AmountOfFreePlaces = styled.p`
font-size: 20px;
color: rgba(66, 66, 66);
font-weight: 500;
text-align: right;
`