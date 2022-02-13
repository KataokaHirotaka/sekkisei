import { useCallback, useState } from "react";
import styles from "src/components/nav/index.module.scss";
import { linkData } from "src/components/nav/data";

export const Nav = (): JSX.Element => {
  const [isClick, setIsClick] = useState(false);

  const clickHandle = useCallback(() => {
    setIsClick((prevIsClick) => !prevIsClick);
  }, []);

  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_button_wrapper} onClick={clickHandle}>
        <button
          className={`${styles.nav_button} ${isClick ? styles.open : null}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <span className={styles.nav_button_txt}>MENU</span>
      <nav className={`${styles.nav} ${isClick ? styles.open : null}`}>
        <ul>
          {linkData.map((link) => {
            return (
              <li key={link.id} onClick={clickHandle}>
                <a href={link.href}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div>
          <span>Language</span>
          <span>Es</span>
          <span></span>
          <span>En</span>
        </div>
        <p>Official SNS</p>
      </nav>
    </div>
  );
};