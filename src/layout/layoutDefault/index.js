import {NavLink, Outlet} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
export const handleBEM = (e) => {
return e.isActive ? "layoutDefault__link layoutDefault__link--active" : "layoutDefault__link";

};
function LayoutDefault(){
    const result=useSelector(state=>state.CartReducers);
    const total=result.reduce((sum,item)=>{
      return sum +item.quantity;
    },0)
   
    return (
      <>
        <div className="layoutDefault">
          <header className="layoutDefault__head">
            <div className="layoutDefault__logo">
               <NavLink to="/" className={handleBEM}>logo</NavLink>
            </div>
            <div className="layoutDefault__cart">
               <NavLink to="/cart"><FaCartShopping />({total})</NavLink>
            </div>
          </header>
          <main className="main">
            <Outlet />
          </main>
          <footer className="layoutDefault__foot">
            Copyright 2023.com by 28tech
          </footer>
        </div>
      </>
    );
  }
  


export default LayoutDefault;