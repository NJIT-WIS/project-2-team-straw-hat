import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./footer";

const name = "[Your Name]";
export const siteTitle = "MyWebClass.org";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Twitter meta tags */}
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
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        
        {/* FB opengraph meta tags */}
        <meta property="og:url" content="https://njit-wis.github.io/project-2-team-straw-hat" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MyWebClass" />
        <meta
          property="og:description"
          content="Learn how to build a personal website using Next.js"
        />
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
