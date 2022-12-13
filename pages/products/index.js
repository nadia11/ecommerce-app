import cx from 'classnames';
import styles from '../././../styles/Home.module.css';
import allProducts from '../data/products.json';
import Head from 'next/head';
import Link from 'next/link';
export default Index;

function Index() {
  return (
    <>
      <Head>
        <title>Plants | Index</title>
      </Head>
      <div className="container">
        <h2 className={styles.title}>
          All Products <span>🌿</span>
        </h2>
        <div className={styles.products_container}>
          {allProducts.map((product) => {
            return (
              <div className={styles.product_card} key={product.id}>
                <Link legacyBehavior href={`products/${product.id}`}>
                  <a>
                    <div className={styles.product_img}>
                      <img src={product.image.url} alt={product.name} />
                    </div>
                  </a>
                </Link>
                <div className={styles.product_content}>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button className="btn">Add to cart 🛒</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}