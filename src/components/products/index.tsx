import Image from "next/image";
import { data } from "src/components/products/data";
import { Card } from "../card";
import { Slider } from "src/components/slider";
import styles from "src/components/products/index.module.scss";
import React from "react";

export const Products = (): JSX.Element => {
  return (
    <section className={styles.products_section} id="products">
      <div className={`${styles.products_top}`}>
        <h2>PRODUCTS</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.top_txt_wrapper}>
          <h3>ROUTINE</h3>
          <p>JAPANESE MINIMALIST SKINCARE RITUALS</p>
          <p>
            Japanese minimalist skincare rituals include{" "}
            <br className={styles.br_sp} /> 4 essential steps.
          </p>
        </div>
        <Slider />
        <div className={styles.products_content_wrapper}>
          {data.map((data) => {
            return (
              <div key={data.id}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
