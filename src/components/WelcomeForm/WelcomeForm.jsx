import { LeftSideStarImage, ManImage, WelcomeFormBackgroundStyled, WelcomeFormContent, WelcomeFormMessageBackground, WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage } from "./WelcomeFormStyles";
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
const WelcomeForm = () => {
 
  return (<>
    <WelcomeFormWrapper>
      <WelcomeFormStyled>
        <LeftSideStarImage src={ShootingStar} alt="star-image" />
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