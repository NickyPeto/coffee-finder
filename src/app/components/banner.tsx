import styles from "../../../styles/Banner.module.css";
import Image from "next/image";
import bgCoffeeFinder from "../../../public/static/bg-coffee-finder.png";

// TODO: type this
export default function Banner(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <Image
          src={bgCoffeeFinder}
          height={300}
          width={400}
          alt="an image with a girl with coffee and pastries"
        />
      </div>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Finder</span>
        </h1>
        <div className={styles.column}>
          <p className={styles.subTitle}>Discover your local coffee stores!</p>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.handleOnClick}>
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
