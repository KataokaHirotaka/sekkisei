import Image from "next/image";
import { data } from "src/components/products/data";
import { Card } from "../card";
import styles from "src/components/products/index.module.scss";

export const Products = (): JSX.Element => {
  return (
    <section className={styles.products_section} id="products">
      <div className={styles.products_top}>
        <h2>PRODUCTS</h2>
        {/* <Image
          src="/assets/img/products_top_sp.png"
          width={400}
          height={375}
          alt="products" */}
        {/* /> */}
      </div>
      <div className={styles.products_content_wrapper}>
        {data.map((data) => {
          return (
            <div key={data.id}>
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
