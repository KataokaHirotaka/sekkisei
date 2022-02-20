import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import styles from "src/components/scrollBtn/index.module.scss";
export const ScrollBtn = (): JSX.Element => {
  return (
    <Scroll to="top" smooth={true} duration={600}>
      <div className={styles.scroll_btn}>
        <img src="/assets/img/arrow.svg" alt="" />
        {/* <Image src="/assets/img/arrow.svg" alt="" width={15} height={7.5} /> */}
      </div>
    </Scroll>
  );
};
