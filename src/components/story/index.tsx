import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import styles from "src/components/story/index.module.scss";
// import { ScrollRevealContainer } from "../scrollRevealContainer";

export const Story = (): JSX.Element => {
  return (
    <section id="story" className={styles.story_section}>
      <div className={styles.container}>
        <div className={styles.txt_wrapper}>
          <h2>J-Herbal Beauty</h2>
          <p>
            We combine clean, good-for-your skin formulas with modern Japanese
            technology and ancient Japanese herbal medicine research to create
            the ultimate skincare collection for all skin types. And we call the
            beauty of Japanese herbal medicine J-Herbal Beauty.
          </p>
          <p>
            We cultivate these gifts from the Earth into beautiful formulas that
            improve your skin’s moisture barrier for healthy, radiant and
            translucent skin.
          </p>
        </div>

        <div className={styles.img_wrapper}>
          <Image
            src="/assets/img/story_sp@2x.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
