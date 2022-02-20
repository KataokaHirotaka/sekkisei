import Image from "next/image";
import { data } from "src/components/ingredients/data";
import styles from "src/components/ingredients/index.module.scss";

export const Ingredients = (): JSX.Element => {
  return (
    <section id="ingredients" className={styles.ingredients_section}>
      <div className={styles.container}>
        <div className={styles.top_txt_content}>
          <h2>OUR SKINCARE</h2>
          <div className={styles.txt_wrapper}>
            <p>
              SEKKISEI products are infused with the perfect balance of ancient
              Japanese and Chinese herbal ingredients. Created based on the
              concept of applying centuries old wisdom in herbal medicine to
              skincare.
            </p>
            <p>
              Formulas combine the latest Japanese scientific research with
              carefully selected ingredients from 100+ types of herbs to create
              highly effective products that brighten, hydrate, and minimize the
              appearance of age spots and sun damage.
            </p>
          </div>
        </div>
        <div className={styles.txt_wrapper}>
          <p>INGREDIENTS</p>
          <h3>ITOWA</h3>
          <p>sourced from Japan</p>
          <p>
            Our proprietary ITOWA™ ingredient features a unique blend of three
            herbs carefully sourced from Japan to firm, smooth, and boost
            ceramides in your skin.
          </p>
        </div>
        <ul className={styles.ingredients_list}>
          {data.map((data) => {
            return (
              <li key={data.id}>
                <div className={styles.list_container}>
                  <div className={styles.list_img_wrapper}>
                    <Image
                      src={data.img}
                      layout="fill"
                      objectFit="contain"
                      alt={data.name}
                    />
                  </div>
                  <div className={styles.list_txt_wrapper}>
                    <p>{data.name}</p>
                    <p>{data.from}</p>
                    <p>{data.effect}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.img_wrapper}>
          <Image
            src="/assets/img/map.png"
            layout="fill"
            objectFit="contain"
            alt="map"
          />
        </div>
      </div>
    </section>
  );
};
