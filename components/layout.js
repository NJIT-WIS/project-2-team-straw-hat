import Head from "next/head";
import Script from "next/script";
import styles from "../styles/layout.module.css";
import Nav from "./Nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Twitter meta tags */}
        <meta
          name="description"
          content="At MyWebClass, we believe that every child deserves the opportunity to learn and reach their full potential. That is why we have created a range of courses and resources specifically designed to help children of all ages and abilities develop their skills and knowledge in a fun and engaging way."
          ></meta>
        <meta
          name="twitter:card"
          content="At MyWebClass, we believe that every child deserves the opportunity to learn and reach their full potential. That is why we have created a range of courses and resources specifically designed to help children of all ages and abilities develop their skills and knowledge in a fun and engaging way."
        ></meta>
        <meta name="twitter:site" content="@ipritam_pyaare"></meta>
        <meta name="twitter:title" content="MyWebClass"></meta>
        <meta
          name="twitter:description"
          content="Empowering Every Child to Succeed: Providing Top-Quality Education for All"
        ></meta>
        <meta
          name="twitter:url"
          content="https://njit-wis.github.io/project-2-team-straw-hat"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        {/* FB opengraph meta tags */}
        <meta
          property="og:url"
          content="https://njit-wis.github.io/project-2-team-straw-hat"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MyWebClass" />
        <meta
          property="og:description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          name="keywords"
          content="education learning Technology Science Art"
        />
        <title>MyWebClass</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
