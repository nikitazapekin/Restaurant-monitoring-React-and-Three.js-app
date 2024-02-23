import { LeftSideStarImage, LeftTopStar, ManImage, RigthBottomStar, RigthTopStar, WelcomeFormBackgroundStyled, WelcomeFormContent, WelcomeFormMessageBackground, WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage } from "./WelcomeFormStyles";
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import Star2 from "../../assets/star3.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
const WelcomeForm = () => {
// const {tables} = useMonitoring()
  return (<>
    <WelcomeFormWrapper>
      <WelcomeFormStyled>
        <LeftSideStarImage src={ShootingStar} alt="star-image" />
        <RigthTopStar src={Star} alt="star"/>
        <RigthBottomStar src={Star1} alt="star" />
        <LeftTopStar src={Star2} alt="star" />
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