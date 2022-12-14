import Router from 'next/router'
export default Cart;

function Cart() {
  let x;
  if (typeof window !== 'undefined') {x=(localStorage.getItem("usersName")===null)?"":localStorage.getItem("usersName")}
  return (
    <>
<div>{x}</div>
      <button onClick={()=>{localStorage.removeItem("usersName")}}>Remove</button>

    </>
  )
}