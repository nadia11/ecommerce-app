import Link from 'next/link';
import Router from 'next/router'
import styles from '../styles/components/Navbar.module.css';
import { useEffect } from "react";

const Navbar = () => {
  let user;
  useEffect(() => {
    user=localStorage.getItem("user")
  }, [])


  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a>
          <div className={styles.logo}>
            <div>
              PLANTS <span className={styles.logo_span}>☘</span>
            </div>
          </div>
        </a>
      </Link>
      <h3>HELLO!!! {user}</h3>
      <div className="nav-price snipcart-checkout">
        <span>🛒</span>
        <div className="snipcart-total-price">$0.00</div>

      </div>

      <button  onClick={()=>{Router.push('/')}}>Logout</button>

    </nav>
  );
};

export default Navbar;