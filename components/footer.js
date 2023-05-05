import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.left}>
        <h2>MyWebClass</h2>
      </div>
      <div className={Styles.right}>
        <h3>Socials</h3>
        <div className={Styles.socials}>
          <Link href={"https://www.facebook.com"}>
            <BsFacebook />
          </Link>
          <Link href={"https://www.instagram.com"}>
            <BsInstagram />
          </Link>
          <Link href={"https://www.linkedin.com"}>
            <BsLinkedin />
          </Link>
          <Link href={"https://www.youtube.com"}>
            <BsYoutube />
          </Link>
          <Link href={"https://www.twitter.com"}>
            <FaTwitter />
          </Link>
        </div>
        <h3>Useful Links</h3>
        <div className={Styles.useful_links}>
          <Link href={"/privacy"}>
            <span>Privacy Policy</span>
          </Link>
          <Link href={"/cookies"}>
            <span>Cookies</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
