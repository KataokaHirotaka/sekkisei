import Image from "next/image";
import styles from "src/components/standards/index.module.scss";
import { listData } from "src/components/standards/data";

export const Standards = (): JSX.Element => {
  return (
    <div className={styles.standards_section}>
      <h2>OUR CLEAN STANDARDS</h2>
      <p className={styles.standards_section_txt}>
        We have established clean standards for our skin and the earth, and have
        decided on the ingredients to be used in our products.
      </p>
      <div className={styles.img_wrapper}>
        <Image
          src="/assets/img/standards@2x.png"
          width={335}
          height={495}
          alt="our clean standards"
        />
      </div>
      <div className={styles.list_wrapper}>
        <p>we DO NOT include the following 17 ingredient</p>
        <ol>
          {listData.map((data) => {
            return (
              <li key={data.id}>
                <span>{data.number}</span>
                {data.text}
              </li>
            );
          })}
        </ol>
        <small>※1 0.1% or more of total formula</small>
      </div>
    </div>
  );
};
