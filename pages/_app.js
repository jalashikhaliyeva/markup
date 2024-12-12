import "@/styles/reset.css";
import "@/styles/globals.css";
import ThemeProvider from "@/shared/context/ThemeProvider";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 3 seconds delay
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <ThemeProvider>
      {loading ? <LoadingAnimation /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}