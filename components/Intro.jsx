import React from "react";
import styles from "../styles/Intro.module.css";
import Image from "next/dist/client/image";
import Circle from "./Circle";

function Intro() {
  return (
    <div className={styles.container}>
      <Circle background-color="#b0ff49" top="-50vh" left="-50vh" />
      <Circle background-color="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span>Avocado</span>DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.description}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;
