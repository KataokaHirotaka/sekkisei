import Image from "next/image";
import styles from "src/components/sns-link/index.module.scss";

type Props = {
  type: string | undefined;
};

export const SnsLink = (props: Props): JSX.Element => {
  return (
    <a className={`${styles.sns_link} ${props.type ? styles.white : null}`}>
      Official SNS
      <div className={styles.link_img_wrapper}>
        <Image
          src={
            props.type
              ? "/assets/img/instagram_white.svg"
              : "/assets/img/instagram.svg"
          }
          width={34}
          height={34}
          alt="sns"
        />
      </div>
    </a>
  );
};
