/*
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import Star2 from "../../assets/star3.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
import { useState } from "react";
import useStars from "../../hooks/useStars";
import { RadialGradient, RestaurantComponent, RestaurantComponentAbout, RestaurantComponentBackground, RestaurantComponentBtn, RestaurantComponentInner, RestaurantComponentItem, RestaurantComponentReserve, RestaurantComponentSubtitle, RestaurantComponentTitle } from "./WelcomeFormStyles";
import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
import { Link } from "react-router-dom";
const WelcomeForm = () => {
  const { cardList, currentCard, dragEndHandler, dragLeaveHandler, dragOverHandler, dropHandler, sortCards, dragStartHandler } = useStars()
  return (<>
    <RestaurantComponent>
      <RestaurantComponentBackground src={Background} />
      <RadialGradient />
      <RestaurantComponentInner>
        <RestaurantComponentItem>
          <RestaurantComponentTitle>
            Welcome to
            <RestaurantComponentSubtitle>
              The Niso
            </RestaurantComponentSubtitle>
          </RestaurantComponentTitle>
          <RestaurantComponentAbout>
            Aplication of monitoring and booking
          </RestaurantComponentAbout>
        </RestaurantComponentItem>
        <RestaurantComponentItem>
          <RestaurantComponentBtn>
            <Link to="/restaurant" style={{textDecoration: "none", color: "#e0b574"}}>
            3D tour
            </Link>
          </RestaurantComponentBtn>
        </RestaurantComponentItem>
        <RestaurantComponentReserve>
          Reserve a table
        </RestaurantComponentReserve>

        <RestaurantComponentItem>
        </RestaurantComponentItem>
      </RestaurantComponentInner>
    </RestaurantComponent>
  </>);
}

export default WelcomeForm;
*/


import styles from "./index.module.scss"
import ShootingStar from "../../assets/shooting-star.png"
import Star from "../../assets/star.png"
import Star1 from "../../assets/star1.png"
import Star2 from "../../assets/star3.png"
import useMonitoring from "../../subscribtions/monitoring";
import { useEffect } from "react";
import { useState } from "react";
import useStars from "../../hooks/useStars";
import { RadialGradient, RestaurantComponent, RestaurantComponentAbout, RestaurantComponentBackground, RestaurantComponentBtn, RestaurantComponentInner, RestaurantComponentItem, RestaurantComponentReserve, RestaurantComponentSubtitle, RestaurantComponentTitle } from "./WelcomeFormStyles";
import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
import { Link } from "react-router-dom";
const WelcomeForm = () => {
  const { cardList, currentCard, dragEndHandler, dragLeaveHandler, dragOverHandler, dropHandler, sortCards, dragStartHandler } = useStars()
  return (<>
  {/*
    <img src={Background} className={styles.page__background} alt="restaurant" />
  */}
    <div className={styles.welcome}>
      <h1 className={styles.welcome__title}>
        Welcome to
        <span>
          The Niso
        </span>
      </h1>
      <h2 className={styles.welcome__subtitle}>
        Aplication of monitoring and booking
      </h2>
      <button className={styles.welcome__btn}>

        <Link to="/restaurant" style={{color: "#fff", textDecoration: "none"}}>

        3D tour
        </Link>
      </button>
      <p className={styles.welcome__reserve}>
        Reserve a table
      </p>
    </div>

  </>);
}

export default WelcomeForm;
