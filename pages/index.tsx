import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Trending } from "../components/Trending";

type Trendings = {
  isLoading: boolean;
  data: any[] | null;
  error: Error | null;
};

export default function Home() {
  const [state, setState] = useState<Trendings>({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    setState((state) => ({ ...state, isLoading: true }));

    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/trending");
        const data = await res.json();
        setState((state) => ({ ...state, isLoading: false, data }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Home | GitHub Trending for Laerning</title>
      </Head>
      <div className="h-screen w-screen flex flex-col bg-gray-900">
        <Header />
        <main className="h-full p-5 flex justify-center">
          <div className="w-full h-full bg-gray-700 shadow-lg rounded-lg overflow-auto">
            <ol>
              {state.data?.map((d) => (
                <Trending trending={d} />
              ))}
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}
