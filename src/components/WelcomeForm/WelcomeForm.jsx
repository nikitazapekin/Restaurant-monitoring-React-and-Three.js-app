import { LeftSideStarImage, LeftTopStar, ManImage, RigthBottomStar, RigthTopStar, WelcomeFormBackgroundStyled, WelcomeFormContent, WelcomeFormMessageBackground, WelcomeFormStyled, WelcomeFormWrapper, WelcomeMessage } from "./WelcomeFormStyles";
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import Star2 from "../../assets/star3.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
import { useState } from "react";
import SmileStar1 from "../../assets/smileStar1.png"
import SmileStar2 from "../../assets/SmileStar2.png"
import SmileStar3 from "../../assets/SmileStar3.png"
const WelcomeForm = () => {
// const {tables} = useMonitoring()




const [cardList, setCardList] = useState(
  [
       {id: 1, order: 3, text: "card 3", img: SmileStar1},
       {id: 2, order: 2, text: "card 2", img: SmileStar2},
       {id: 4, order: 1, text: "card 1", img: SmileStar3},
  ]
 )


 const [currentCard, setCurrentCard] = useState(null)
 function dragStartHandler(e, card){
console.log("drag",  card)
setCurrentCard(card)
 }

 function dragEndHandler(e){
}
function dragLeaveHandler(e){
  
  e.target.style.background = "white"
 }

 function dragOverHandler(e){
  e.preventDefault()
  e.target.style.background = "lightgray"
 }

 function dropHandler(e, card){
e.preventDefault()
setCardList(cardList.map(c=> {
  if(c.id== card.id){
       return {...c, order: currentCard.order}
  }

  if(c.id==currentCard.id){
       return {...c, order: card.order}
  }
  return c
}))
e.target.style.background = "white"
 }

 const sortCards= (a, b) => {
if(a.order> b.order) {
  return 1
}
else {
  return -1
}
 }


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
<div className="tt">

{cardList.sort(sortCards).map(card=> (
     <div className="cardв"
     onDragStart={(e)=> dragStartHandler(e, card)}
     onDragLeave={(e)=>dragLeaveHandler(e)}
     onDragEnd={(e)=>dragEndHandler(e)}
     onDragOver={(e)=>dragOverHandler(e)}
     onDrop={(e)=>dropHandler(e, card)}
     draggable={true}
     >
      <img src={card.img} alt="star" />
 </div>
))}
</div>
    </WelcomeFormWrapper>
  </>);
}

export default WelcomeForm;