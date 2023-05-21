import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../src/app/components/banner";
import Card from "@/app/components/card";
import data from "../data/coffee-stores.json";

//This is the root route, the default page
export default function Home() {
  const coffeeData = data;
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <Head>
        <title>Coffee Finder</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Banner buttonText="View stores nearby" handleOnClick={handleClick} />
        </main>
        {coffeeData.map((cafe: any) => (
          <div key={cafe.id}>
            <Card
              name={cafe.name}
              link={cafe.websiteUrl}
              adress={cafe.adress}
              neighbourhood={cafe.neighbourhood}
              imgUrl={cafe.imgUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
}
