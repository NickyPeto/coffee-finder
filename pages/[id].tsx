import Head from "next/head";
import { useRouter } from "next/router";

export default function Coffee() {
  const router = useRouter();
  const query = router.query.id;

  return (
    <>
      <Head>
        <title>{query}</title>
      </Head>
      <div>
        <h2>Coffee: {query}</h2>
      </div>
    </>
  );
}
