import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Card.module.css";

export default function Card(props: any) {
  return (
    <Link href={props.link} className={styles.cardLink}>
      <div className={styles.container}>
        <h2 className={styles.cardHeader}>{props.name}</h2>
        <Image
          src={props.imgUrl}
          width={260}
          height={260}
          alt="A picture of a coffee store"
        />
      </div>
    </Link>
  );
}
