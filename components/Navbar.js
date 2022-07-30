import style from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={style["nav-box"]}>
      <p> JZH</p>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>Resumé</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
