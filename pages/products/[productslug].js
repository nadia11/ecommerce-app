import Head from 'next/head';
import { useRouter } from 'next/router'
import allProducts from '../data/products.json';

import styles from '../../styles/SingleProduct.module.css';

const singleproduct = () => {
  const router = useRouter();
  const { productslug } = router.query;
  let selectedProduct=allProducts.find(product=>product.id===productslug);

  return (
    <>
      <Head>
        <title>Dracaena fragrans</title>
      </Head>
      <div className={styles.single_container}>
        <div className={styles.left_section}>
          <img src={selectedProduct?.image?.url} className={styles.left_img} alt="" />
        </div>
        <div className={styles.right_section}>
          <h3 className={styles.title}>{selectedProduct?.id}</h3>
          <p className={styles.price}>{selectedProduct?.price}</p>
          <div className={styles.para}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              impedit voluptatum vitae labore molestiae, maiores, hic ad
              officiis laudantium in officia, nam vel quod! Nesciunt aperiam
              explicabo facere laboriosam eius.
            </p>
          </div>
          <button

            className="btn" onClick={ ()=>{if (typeof window !== 'undefined') {
            localStorage.setItem('usersName', selectedProduct?.id)
          }}}>Add to cart 🛒</button>
        </div>
      </div>
    </>
  );
};

export default singleproduct;