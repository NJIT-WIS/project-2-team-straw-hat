import Styles from "../styles/Footer.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.left}>
        <h2>MyWebClass</h2>
      </div>
      <div className={Styles.right}>
        <h3>Socials</h3>
        <div className={Styles.socials}>
          <BsFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsYoutube />
          <FaTwitter />
        </div>
        <h3>Useful Links</h3>
        <div className={Styles.useful_links}>
          <span>Privacy Policy</span>
          <span>GDPR</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
