import styles from "src/components/store/index.module.scss";
import { storeData } from "src/components/store/data";
import { SnsLink } from "../sns-link";
import { ScrollBtn } from "../scrollBtn";

export const Store = (): JSX.Element => {
  return (
    <section id="find_a_store" className={styles.store_section}>
      <div className={styles.container}>
        <h2 className={styles.store_section_ttl}>FIND A STORE</h2>
        <ul className={styles.store_data_list}>
          {storeData.map((data) => {
            return (
              <li className={styles.data_list_content} key={data.name}>
                <p className={styles.store_name}>{data.name}</p>
                <p className={styles.store_address}>{data.address}</p>
                <p className={styles.store_address}>{data.address_second}</p>
                <a className={styles.store_map_link} href={data.map_link}>
                  MAP
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.store_module_wrapper}>
          <div className={styles.snsLink_wrapper}>
            <SnsLink type="" />
          </div>
          <div className={styles.scrollBtn_wrapper}>
            <ScrollBtn />
          </div>
        </div>
      </div>
    </section>
  );
};
