import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CardWrapper from "./component/card/cardWrapper";
import NavBar from "./component/navbar/navbar";
import { authOptions } from "./api/auth/[...nextauth]/route";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const { message, cardData } = await getCardData();

  return (
    <>
      <main className={styles.main}>
        {JSON.stringify(session)}
        <CardWrapper cardData={cardData} />
      </main>
    </>
  );
}

export const getCardData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/add/");
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
