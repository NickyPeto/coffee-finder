import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../src/app/components/banner";

//This is the root route, the default page
export default function Home() {
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
      </div>
    </>
  );
}
