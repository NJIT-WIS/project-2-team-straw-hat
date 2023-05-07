import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsChevronBarRight,
  BsChevronRight,
} from "react-icons/bs";
import mailchimp from "../helper/mailchimp";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Styles from "../styles/Footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const onSubHandler = () => {
    email != null && email != "" && mailchimp({ email });
  };

  return (
    <footer className={Styles.footer}>
      <div className={Styles.left}>
        <h2>MyWebClass</h2>
        <div className={Styles.subscribeContainer}>
          <input
            id="subcribe_newsletter"
            type="text"
            placeholder="Subscribe to our newsletter"
            onChange={(e) => setEmail(e.target.value)}
          />
          <BsChevronRight onClick={() => onSubHandler()} />
        </div>
        <select id="Language" name="Language">
          <option value="english">EN</option>
          <option value="Spanish">ES</option>
        </select>
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
