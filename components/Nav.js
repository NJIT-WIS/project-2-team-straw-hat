import { BsSearch } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"
import Styles from "../styles/Nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <nav className={Styles.nav}>
      <div className={Styles.left}>MyWebClass</div>
      <div className={Styles.right}>
        <ul>
          {showSearchBar ? <li>
            <input placeholder="Search..." type="text" className={Styles.searchBar} />
          </li> :
            <>
              <li>Home</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Contact</li></>}
          <li onClick={() => { setShowSearchBar(!showSearchBar) }}>{!showSearchBar ? <BsSearch /> : <RxCross1 />}</li>
        </ul>
      </div>
    </nav>
  );
}
