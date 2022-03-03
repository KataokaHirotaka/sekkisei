import Image from "next/image";
// import { useEffect, useRef } from "react";
import { data } from "src/components/products/data";
import styles from "src/components/slider/index.module.scss";

export const Slider = (): JSX.Element => {
  return (
    <div className={styles.content_wrapper}>
      {data.map((data) => {
        return (
          <div key={data.id} className={styles.slider_content}>
            <span
              className={`${data.id === "04" ? styles.stepFour : null} ${
                data.id === "05" ? styles.stepFive : null
              } ${data.id === "06" ? styles.stepSix : null}`}
            >
              {data.stepNum}
            </span>
            <div className={styles.img_wrapper}>
              <Image src={data.img} alt="" layout="fill" objectFit="contain" />
            </div>

            <p
              className={`${data.id === "01" ? styles.firstStep : null} ${
                data.id === "04" ? styles.fourthStep : null
              }`}
            >
              {data.step}
            </p>
            <span className={data.seam === "arrow" ? styles.arrow : styles.or}>
              {data.seam === "or" ? "OR" : null}
            </span>
          </div>
        );
      })}
    </div>
  );
};
