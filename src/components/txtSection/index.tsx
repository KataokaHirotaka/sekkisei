import styles from "src/components/txtSection/index.module.scss";

type Props = {
  type: string | null;
  txtData: {
    ttl: string;
    txt: string;
  }[][];
  children: React.ReactNode | null;
};

export const TxtSection = (props: Props): JSX.Element => {
  const largeTxtData = props.txtData[0];
  const middleTxtData = props.txtData[2];
  const smallTxtData = props.txtData[1];

  if (props.type === "large") {
    return (
      <section className={styles.txt_section}>
        <div className={styles.txt_content}>
          <div className={styles.top_txt_wrapper}>
            <h2>{largeTxtData[0].ttl}</h2>
            <p>{largeTxtData[0].txt}</p>
          </div>
          <div className={`${styles.txt_wrapper} ${styles.txt_wrapper_pc}`}>
            <div>
              <h3>{largeTxtData[1].ttl}</h3>
              <p>{largeTxtData[1].txt}</p>
              <h3>{largeTxtData[2].ttl}</h3>
              <p>{largeTxtData[2].txt}</p>
            </div>
          </div>
        </div>
        {props.children}
      </section>
    );
  }
  if (props.type === "middle_sp") {
    return (
      <section className={styles.txt_section_sp}>
        <div className={`${styles.txt_wrapper} `}>
          <h3>{largeTxtData[1].ttl}</h3>
          <p>{largeTxtData[1].txt}</p>
          <h3>{largeTxtData[2].ttl}</h3>
          <p>{largeTxtData[2].txt}</p>
        </div>
      </section>
    );
  }
  if (props.type === "middle") {
    return (
      <section className={styles.txt_section}>
        {props.children}
        <div className={styles.txt_wrapper}>
          <h3>{middleTxtData[0].ttl}</h3>
          <p>{middleTxtData[0].txt}</p>
          <h3>{middleTxtData[1].ttl}</h3>
          <p>{middleTxtData[1].txt}</p>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.txt_section}>
      {props.children}
      <div className={styles.txt_wrapper}>
        <h3>{smallTxtData[0].ttl}</h3>
        <p>{smallTxtData[0].txt}</p>
      </div>
    </section>
  );
};
