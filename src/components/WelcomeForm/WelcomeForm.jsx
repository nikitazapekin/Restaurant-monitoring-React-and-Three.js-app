import { ManImage, WelcomeFormBackgroundStyled, WelcomeFormContent, WelcomeFormMessageBackground, WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage } from "./WelcomeFormStyles";
import Man from "../../assets/logo.png"
const WelcomeForm = () => {
  return (<>
    <WelcomeFormWrapper>
      <WelcomeFormStyled>
        <WelcomeFormBackgroundStyled />
        <WelcomeMessage>
          Welcome to application of monitoring booking of tables at Zorka restaurant! Enjoy yorself!
          <WelcomeFormMessageBackground />
        </WelcomeMessage>
      </WelcomeFormStyled>
    </WelcomeFormWrapper>
  </>);
}

export default WelcomeForm;