import styles from "src/components/store/index.module.scss";
import { storeData } from "src/components/store/data";
import Image from "next/image";

export const Store = (): JSX.Element => {
  return (
    <section id="find_a_store" className={styles.store_section}>
      <h2>Find A Store</h2>
      <ul className={styles.store_data_list}>
        {storeData.map((data) => {
          return (
            <li className={styles.store_data_content} key={data.name}>
              <p className={styles.store_name}>{data.name}</p>
              <p className={styles.store_address}>{data.address}</p>
              <a className={styles.store_map_link} href={data.map_link}>
                MAP
              </a>
            </li>
          );
        })}
      </ul>
      <a className={styles.sns_link} href="">
        Official SNS
        <div className={styles.link_img_wrapper}>
          <Image
            src="/assets/img/instagram.svg"
            width={34}
            height={34}
            alt="instagram"
          />
        </div>
      </a>
    </section>
  );
};
