import Image from "next/image";
import styles from "src/components/standards/index.module.scss";
import { listData } from "src/components/standards/data";

export const Standards = (): JSX.Element => {
  return (
    <div className={styles.standards_section}>
      <div className={styles.container}>
        <div className={styles.ttl_wrapper_sp}>
          <h2 className={styles.standards_section_ttl}>OUR CLEAN STANDARDS</h2>
          <p className={styles.standards_section_txt}>
            We have established clean standards for our skin and the earth, and
            have decided on the ingredients to be used in our products.
          </p>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.img_wrapper}>
            <Image
              src="/assets/img/standards@2x.png"
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
              alt="our clean standards"
            />
          </div>
          <div className={styles.list_wrapper}>
            <div className={styles.ttl_wrapper_pc}>
              <h2 className={styles.standards_section_ttl}>
                OUR CLEAN STANDARDS
              </h2>
              <p className={styles.standards_section_txt}>
                We have established clean standards for our skin and the earth,
                and have decided on the ingredients to be used in our products.
              </p>
            </div>
            <p className={styles.list_wrapper_txt}>
              we DO NOT include the following 17 ingredient
            </p>
            <ol>
              <div className={styles.single_digit_list}>
                {listData[0].map((data) => {
                  return (
                    <li key={data.id}>
                      <span>{data.number}</span>
                      {data.text}
                    </li>
                  );
                })}
              </div>
              <div>
                {listData[1].map((data) => {
                  return (
                    <li key={data.id}>
                      <span>{data.number}</span>
                      {data.text}
                    </li>
                  );
                })}
              </div>
            </ol>
            <small>※1 0.1% or more of total formula</small>
          </div>
        </div>
      </div>
    </div>
  );
};
