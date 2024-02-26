


import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import NavBarMobileComponent from "../../components/NavBarMobile/NavBarMobile";
import { NavBarMobile, NavBarMobileVersion } from "../../components/NavBarMobile/NavBarMobileStyled";
import WelcomeForm from "../../components/WelcomeForm/WelcomeForm";
import { Global } from "../../consts/GlobalStyles";
import { Layout } from "../pages.styles";


//import useOutsideClick from './useOutsideClick';
import useOutsideClick from "../../hooks/useOutsideClick";
import TestModal from "../../components/Modal/TestModal";
import { useState } from "react";
import "./homepage.scss"
const Homepage = () => {
    const [cardList, setCardList] = useState(
     [
          {id: 1, order: 3, text: "card 3"},
          {id: 2, order: 2, text: "card 2"},
          {id: 4, order: 1, text: "card 1"},
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
    return ( 
         <>
       
<NavBarMobileComponent /> 
     <NavBar />
     <Layout>
     <WelcomeForm />
     <Global />
     <Footer />
     </Layout> 
    


<div className="tt">

    {cardList.sort(sortCards).map(card=> (
         <div className="card"
         onDragStart={(e)=> dragStartHandler(e, card)}
         onDragLeave={(e)=>dragLeaveHandler(e)}
         onDragEnd={(e)=>dragEndHandler(e)}
         onDragOver={(e)=>dragOverHandler(e)}
         onDrop={(e)=>dropHandler(e, card)}
         draggable={true}
         >
          {card.text}
     </div>
    ))}
    </div>
</>
     );
}
 
export default Homepage;
