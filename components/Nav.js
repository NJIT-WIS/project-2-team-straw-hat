import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import Styles from "../styles/Nav.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState(false);

  return (
    <nav className={Styles.nav}>
      <div className={Styles.left}>
        <Link href="/">MyWebClass</Link>
      </div>
      <div className={Styles.hamburger}>
        <span
          onClick={() => {
            setShowHamMenu(!showHamMenu);
          }}
        >
          {showHamMenu ? <GiHamburgerMenu /> : <RxCross1 />}
        </span>
      </div>
      {!showHamMenu && <div className={Styles.responsive}>
      <div className={Styles.responsiveright}>
        <ul>
          {showSearchBar ? (
            <li>
              <input
                placeholder="Search..."
                type="text"
                className={Styles.searchBar}
              />
            </li>
          ) : (
            <>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </>
          )}
          <li
            onClick={() => {
              setShowSearchBar(!showSearchBar);
            }}
          >
            {!showSearchBar ? <BsSearch /> : <RxCross1 />}
          </li>
        </ul>
      </div></div>}
      <div className={Styles.right}>
        <ul>
          {showSearchBar ? (
            <li>
              <input
                placeholder="Search..."
                type="text"
                className={Styles.searchBar}
              />
            </li>
          ) : (
            <>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </>
          )}
          <li
            onClick={() => {
              setShowSearchBar(!showSearchBar);
            }}
          >
            {!showSearchBar ? <BsSearch /> : <RxCross1 />}
          </li>
        </ul>
      </div>
    </nav>
  );
}
