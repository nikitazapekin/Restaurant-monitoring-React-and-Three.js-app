
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/home.png"
import Restaurant from "../../assets/restaurant.png"
import User from "../../assets/white-user.png"
import { Blur, Burger, BurgerButton, BurgerButtonLine, BurgerButtonSpan, MenuContent, MenuHeader, MenuListElement, MenuListElementNavigate, MenuWrapper, NavBarBackground, StyledMenuList } from "./NavBarMobileStyled";
const Menu = ({ header, items, active, setActive }) => {

  /*
 const storedData = sessionStorage.getItem('personalData');
  if (storedData) {
      const parsedData = JSON.parse(storedData);
      navigate(`/personal/${parsedData.id}`)
  }
  */
  return (
    <MenuWrapper
      isActive={active}
      onClick={() => setActive(false)}
    >
      <Blur />
      <MenuContent onClick={(e) => e.stopPropagation()}>
        <MenuHeader>
          {header}
        </MenuHeader>
        <StyledMenuList>
          {items.map((item, index) => (
            <MenuListElement>
              <Link to={`${item.href}`}>
                <MenuListElementNavigate>
                  {item.value}
                </MenuListElementNavigate>
              </Link>

              <img src={item.icon} />
            </MenuListElement>
          ))}
        </StyledMenuList>
      </MenuContent>

    </MenuWrapper>
  );
}
const NavBarMobileComponent = () => {
  const [userAutherithed, setUserAutherithed] = useState()
  useEffect(()=> {
  const storedData = sessionStorage.getItem('personalData');
  if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserAutherithed(parsedData.id)
    //  navigate(`/personal/${parsedData.id}`)
  }
  }, [])
  const items = [
    { value: "Homepage", href: "/", icon: Home },
    { value: "Our restaurant", href: "/restaurant", icon: Restaurant },
    { value: "Account", href: userAutherithed ? `/personal/${userAutherithed}` : "/sign_in", icon: User },

  ]

  const [menuActive, setMenuActive] = useState(false)
  const handleClick = () => {
    console.log(menuActive)
    setMenuActive(prev => !prev)
  }



  return (
    <>

      <Burger >

        <NavBarBackground />
        <BurgerButton onClick={handleClick}>
          <BurgerButtonLine />
          <BurgerButtonLine />
          <BurgerButtonLine />
        </BurgerButton>
      </Burger>
      <Menu active={menuActive}
        setActive={setMenuActive}
        header={"Zorka"} items={items} />
    </>
  )
}
export default NavBarMobileComponent
 