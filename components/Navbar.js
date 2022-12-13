import Link from 'next/link';
import Router from 'next/router'
import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a>
          <div className={styles.logo}>
            <p>
              PLANTS <span className={styles.logo_span}>☘</span>
            </p>
          </div>
        </a>
      </Link>
      <div className={styles.nav_price}>
        <span>🛒</span>
        <p>$0.00</p>
        <button className={'btn'} onClick={()=>{Router.push('/')}}>Logout</button>
      </div>

    </nav>
  );
};

export default Navbar;