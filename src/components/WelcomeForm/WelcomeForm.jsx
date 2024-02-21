import { ManImage, WelcomeFormBackgroundStyled, WelcomeFormContent,WelcomeFormMessageBackground,WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage } from "./WelcomeFormStyles";
import Man from "../../assets/logo.png"
const  WelcomeForm= () => {
    return ( <>
    <WelcomeFormWrapper>
  <WelcomeFormStyled>
    <WelcomeFormBackgroundStyled />
    <WelcomeFormContent>
        <ManImage  alt="man" src={Man} /> 
        <WelcomeMessage>
        Welcome to application of monitoring booking of tables at Zorka restaurant! Enjoy yorself!
    <WelcomeFormMessageBackground />
        </WelcomeMessage>
{/*
  <WelcomeFormMessage>
    <WelcomeFormMessageBackground />
    </WelcomeFormMessage>      
*/}
    </WelcomeFormContent>
  </WelcomeFormStyled>
    </WelcomeFormWrapper>
    </> );
}
 
export default WelcomeForm;