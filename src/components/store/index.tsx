import styles from "src/components/store/index.module.scss";
import { storeData } from "src/components/store/data";
import Image from "next/image";
import { SnsLink } from "../sns-link";

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
      <div className={styles.sns_link_wrapper}>
        <SnsLink />
      </div>
    </section>
  );
};
