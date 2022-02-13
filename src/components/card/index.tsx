import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "src/components/card/index.module.scss";

type Props = {
  data: {
    img: string;
    title: string;
    supplement: string;
    price: string;
    detail: string;
    type: string;
    concerns: string;
    ingredients: {
      horsetail: string;
      tears: string;
      itowa: string;
    }[];
  };
};

export const Card = (props: Props): JSX.Element => {
  const propsData = props.data;
  const [isClick, setIsClick] = useState(false);
  const clickHandle = useCallback(() => {
    setIsClick((prevIsClick) => !prevIsClick);
  }, []);

  return (
    <div className={styles.product_card}>
      <Image
        src={propsData.img}
        width={350}
        height={350}
        alt={propsData.title}
      />
      <h2 className={styles.card_title}>{propsData.title}</h2>
      <span className={styles.card_supplement}>{propsData.supplement}</span>
      <p className={styles.card_price}>{propsData.price}</p>
      <div className={styles.card_section}>
        <h3>Product detail</h3>
        <p>{propsData.detail}</p>
      </div>
      <div className={styles.card_section}>
        <h3>Skin type</h3>
        <p>{propsData.type}</p>
      </div>
      <div className={styles.card_section}>
        <h3>Concerns</h3>
        <p>{propsData.concerns}</p>
      </div>
      <div className={`${styles.card_section} ${isClick ? styles.open : null}`}>
        <h3 className={`${styles.list_title}`} onClick={clickHandle}>
          Key Ingredients<span></span>
        </h3>

        <ul className={styles.card_section_list}>
          <li>
            <h3>Horsetail (Equisetum Arvense) Exract</h3>
            <p>{propsData.ingredients[0].horsetail}</p>
          </li>
          <li>
            <h3>Job&apos;s Tears Seed Extract</h3>
            <p>{propsData.ingredients[0].tears}</p>
          </li>
          <li>
            <h3>ITOWA</h3>
            <p>{propsData.ingredients[0].itowa}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
