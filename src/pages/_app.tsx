import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import posthog from "posthog-js";
import { ApolloProvider } from "@apollo/client";
import { CookiesProvider } from "react-cookie";
import client from "../../apollo-client";
import { AnimatePresence, motion } from "framer-motion";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_API_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, {
    api_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <AnimatePresence mode="wait">
          <motion.div
          // key={router.route}
          // initial="initialState"
          // animate="animateState"
          // exit="exitState"
          // variants={{
          //   initialState: {
          //     opacity: 0,
          //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          //   },
          //   animateState: {
          //     opacity: 1,
          //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          //   },
          //   exitState: {
          //     clipPath: "circle(0.0% at 50% 50%)",
          //   },
          // }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </CookiesProvider>
    </ApolloProvider>
  );
}
