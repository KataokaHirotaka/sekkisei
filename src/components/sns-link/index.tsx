import Image from "next/image";
import styles from "src/components/sns-link/index.module.scss";

export const SnsLink = (): JSX.Element => {
  return (
    <a className={styles.sns_link}>
      Official SNS
      <div className={styles.link_img_wrapper}>
        <Image
          src="/assets/img/instagram.svg"
          width={34}
          height={34}
          alt="sns"
        />
      </div>
    </a>
  );
};
