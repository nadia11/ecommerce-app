import Navbar from './Navbar.js';
import Footer from './Footer';
import {useRouter} from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/' ? false : true;
  return (
    <div>
      {showHeader && <Navbar />}
      {children}
      <Footer />
    </div>
  );
};
export default Layout;