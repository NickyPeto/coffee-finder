import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../src/app/components/banner";
import Card from "@/app/components/card";
import data from "../data/coffee-stores.json";

export async function getStaticProps(context: any) {
  //only runs at buildtime, runs on server side , wont be included in client bundle, on dev runs both in client and server
  //also useful to make data queries etc since they're are not available in the client after build
  return {
    props: {
      coffeeStores: data, // will be passed to the page component as props
    },
  };
}

//This is the root route, the default page
export default function Home(props: any) {
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
        <h2 className={styles.heading}>Stores</h2>
        {props.coffeeStores.length > 0 ? (
          props.coffeeStores.map((cafe: any) => (
            <div key={cafe.id}>
              <Card
                name={cafe.name}
                link={`/coffee-store/${cafe.id}`}
                adress={cafe.adress}
                neighbourhood={cafe.neighbourhood}
                imgUrl={cafe.imgUrl}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
