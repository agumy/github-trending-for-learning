import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | GitHub Trending for Laerning</title>
      </Head>
      <div className="h-screen w-screen flex flex-col bg-gray-900">
        <Header />
        <main className="h-full" />
      </div>
    </>
  );
}
