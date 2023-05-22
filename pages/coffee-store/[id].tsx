import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import data from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";
import { CoffeeStoreProps } from "../../types/types";

export function getStaticProps(staticProps: any) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: data.find((store) => {
        return store.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = data.map((store) => {
    return {
      params: {
        id: store.id.toString(),
      },
    };
  });

  return {
    paths: [...paths],
    fallback: true,
  };
}

export default function Coffee({ coffeeStore }: CoffeeStoreProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, id, address, neighbourhood, websiteUrl, imgUrl } = coffeeStore;

  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.gridContainer} key={id}>
        <section className={styles.col1}>
          <h2>{name}</h2>
          <Image
            src={imgUrl}
            alt="a picture of the coffee store"
            width={300}
            height={200}
            className={styles.storeImg}
          />
          <p>{neighbourhood}</p>
        </section>
        <section className={styles.col2}>
          <p>{address}</p>
          <a href={websiteUrl}>Go to the stores website</a>
        </section>
      </div>
      <Link href={"/"}>home</Link>
    </div>
  );
}
