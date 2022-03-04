import { useCallback, useState } from "react";
import styles from "src/components/nav/index.module.scss";
import { linkData } from "src/components/nav/data";
import { Link as Scroll } from "react-scroll";
import { SnsLink } from "../sns-link";

export const Nav = (): JSX.Element => {
  const [isClick, setIsClick] = useState(false);

  const clickHandle = useCallback(() => {
    setIsClick((prevIsClick) => !prevIsClick);
    const body = document.querySelector("body");
  }, []);

  return (
    <div className={`${styles.nav_wrapper} ${isClick ? styles.open : null}`}>
      <div className={styles.nav_button_wrapper} onClick={clickHandle}>
        <button className={styles.nav_button}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <p className={styles.nav_button_txt}>MENU</p>
      </div>

      <nav className={styles.nav}>
        <ul>
          {linkData.map((link) => {
            return (
              <li key={link.id}>
                <Scroll
                  to={link.id}
                  smooth={true}
                  duration={600}
                  onClick={clickHandle}
                >
                  {link.title}
                </Scroll>
              </li>
            );
          })}
        </ul>
        <div className={styles.switch_wrapper}>
          <span>Language</span>
          <span id="spain">Es</span>
          <span></span>
          <span id="korea">En</span>
        </div>
        <span className={styles.line}></span>
        <SnsLink type="white" />
      </nav>
    </div>
  );
};
