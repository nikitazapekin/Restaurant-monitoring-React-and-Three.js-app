import Fon from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
import styles from "./index.module.scss"
const Background = () => {
    return (<>
        <div className={styles.fon}>
            <img src={Fon} alt="background" className={styles.fon__background} />
            <div className={styles.fon__gradient}></div>
        </div>
    </>);
}

export default Background;