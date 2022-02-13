import Image from "next/image";
import styles from "src/components/story/index.module.scss";

export const Story = (): JSX.Element => {
  return (
    <section id="story" className={styles.story_section}>
      <h2>J-Herbal Beauty</h2>
      <div className={styles.txt_wrapper}>
        <p>
          We combine clean, good-for-your skin formulas with modern Japanese
          technology and ancient Japanese herbal medicine research to create the
          ultimate skincare collection for all skin types. And we call the
          beauty of Japanese herbal medicine J-Herbal Beauty.
        </p>
        <p>
          We cultivate these gifts from the Earth into beautiful formulas that
          improve your skin’s moisture barrier for healthy, radiant and
          translucent skin.
        </p>
      </div>
      <Image src="/assets/img/story_sp@2x.png" width={335} height={490} />
    </section>
  );
};
