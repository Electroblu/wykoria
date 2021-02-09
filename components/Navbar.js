import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar bg-dark">
      <div className="brand">
        <Link href="/">
          <a>
            <img src="/server-icon.png" alt="Wykoria logo" />
          </a>
        </Link>
        <h1 className="large">Wykoria</h1>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div>
        <ul className={click ? "nav-links open" : "nav-links"}>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/rules">
              <a>Rules</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/proxy">
              <a>Proximity Chat</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/economy">
              <a>Economy</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/shops">
              <a>Shops</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/land-claims">
              <a>Land Claims</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/slimefun">
              <a>Slimefun</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/ranks">
              <a>Ranks</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/custom-mobs">
              <a>Custom Mobs</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/drop-rates">
              <a>Drop Rates</a>
            </Link>
          </li>
          <li className={click ? "fade" : ""} onClick={handleClick}>
            <Link href="/datapacks">
              <a>Datapacks</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
