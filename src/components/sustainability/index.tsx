import Image from "next/image";
import styles from "src/components/sustainability/index.module.scss";
import { txtData } from "src/components/sustainability/data";
import { TxtSection } from "../txtSection";

export const Sustinability = (): JSX.Element => {
  return (
    <section className={styles.sustinability_section}>
      <div className={styles.container}>
        <TxtSection type="large" txtData={txtData}>
          <div className={styles.img_wrapper}>
            <Image
              src="/assets/img/sustinability_01.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </TxtSection>
        <TxtSection type="middle_sp" txtData={txtData}>
          {null}
        </TxtSection>
        <TxtSection type="small" txtData={txtData}>
          <div className={styles.img_wrapper}>
            <Image
              src="/assets/img/sustinability_02.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </TxtSection>
        <TxtSection type="middle" txtData={txtData}>
          <div className={styles.img_wrapper}>
            <Image
              src="/assets/img/sustinability_03.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </TxtSection>
      </div>
    </section>
  );
};
