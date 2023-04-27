import Styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.left}>MyWebClass</div>
      <div className={Styles.right}>
        <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
