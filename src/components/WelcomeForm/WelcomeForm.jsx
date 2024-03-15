


import { LeftSideStarImage, LeftTopStar, ManImage, RigthBottomStar, RigthTopStar, StarCard, StarImage, StarImageBottomLeft, StarImageElement, StarLeftTop, StarImg, StarWrapper, StarsBlock, WelcomeFormBackgroundStyled, WelcomeFormContent, WelcomeFormMessageBackground, WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage, StarRightTop, StarLeftBottom, StarRightBottom } from "./WelcomeFormStyles";
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import Star2 from "../../assets/star3.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
import { useState } from "react";
import useStars from "../../hooks/useStars";
const WelcomeForm = () => {
  const { cardList, currentCard, dragEndHandler, dragLeaveHandler, dragOverHandler, dropHandler, sortCards, dragStartHandler } = useStars()
  return (<>
    <WelcomeFormWrapper>
      <WelcomeFormStyled>
        <WelcomeFormBackgroundStyled />
        <WelcomeMessage>
          <StarLeftTop>
            <StarImg src={Star} alt="star" />
          </StarLeftTop>
          <StarRightTop>
            <StarImg src={Star} alt="star" />
          </StarRightTop>
          <StarLeftBottom>
            <StarImg src={Star} alt="star" />
          </StarLeftBottom>
          <StarRightBottom>
            <StarImg src={Star} alt="star" />
          </StarRightBottom>
          Welcome to application of monitoring booking of tables at Zorka restaurant! Enjoy yorself!
          <WelcomeFormMessageBackground />
        </WelcomeMessage>
        <StarsBlock>
          {cardList.sort(sortCards).map(card => (
            <StarCard
              onDragStart={(e) => dragStartHandler(e, card)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, card)}
              draggable={true}
            >
              <StarImage src={card.img} alt="star" />
            </StarCard>
          ))}
        </StarsBlock>
      </WelcomeFormStyled>
    </WelcomeFormWrapper>
  </>);
}

export default WelcomeForm;