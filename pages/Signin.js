import cx from 'classnames';
import styles from '../styles/Signin.module.css'
import Router from 'next/router'

export default Signin;

function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {localStorage.setItem("user",event.target.email.value)}
    console.log(event.target.email.value)
    event.target.reset();


    Router.push('/products');
  };
  return (
    <>
      {/*<div>    <img src={'/images/sign-in.jpg'} style={{ width: "100%", height:"70%" }}/></div>*/}
<div  style={{backgroundImage:`url(http://localhost:3000/images/sign-in.jpg)`,    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'}}>
  <h4 className="h3 mb-3 fw-normal" style={{float:"left",color:"#5aa388", marginLeft:'40px',marginTop:'40px'}}>PLANTERINA</h4>
      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form onSubmit={handleSubmit}>

          <h3 className="h3 mb-3 fw-normal">DELIVERING <strong>PLANTS</strong>, <strong>DELIVERING </strong>HAPPINESS</h3>

          <div className="form-floating">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
</div>

    </>
  )
}