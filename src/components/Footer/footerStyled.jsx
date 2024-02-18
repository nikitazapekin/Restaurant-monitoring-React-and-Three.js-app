import styled from "styled-components";
export const FooterComponent = styled.footer`
    width: 100%;
    height:  70px;
    position: relative;
display: flex;
justify-content: center;
align-items: center;
//bottom: 0;
`

export const FooterBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0 ;
left:  0;
opacity: 0.4;
background-color: rgba(202, 204, 219);
`
export const FooterTitle = styled.p`
      font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    font-size: 32px;
    z-index: 123;
    cursor: pointer;
`
