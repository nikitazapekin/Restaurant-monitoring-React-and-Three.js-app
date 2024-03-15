import styled from "styled-components";
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

