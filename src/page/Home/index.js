import "./index.scss";
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { AddProducts, Dem, UpdateProducts } from "../../Actions";

function Home() {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const result=useSelector(state=>state.CartReducers);
  useEffect(() => {
    const fetchAPI = () => {
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchAPI();
  }, []);

  const handleClick=(id,item)=>{
     if(result.some((item)=>item.id===id)){
        dispatch(UpdateProducts(id));
     }
     else{
       dispatch(AddProducts(id,item));
     }
  } 
  
  return (
    <>
      {data.length > 0 ? (
        <>
          <h3>Danh sach san pham</h3>
          <div className="main__list">
            {data.map((item) => (
              <div className="main__item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h4 className="main__title">{item.title}</h4>
                <div className="main__price-new">
                  {(
                    (item.price * (100 - item.discountPercentage)) /
                    100
                  ).toFixed(0)}
                  $
                </div>
                <div className="main__price-old">{item.price}$</div>
                <div className="main__discount">{item.discountPercentage}%</div>
                <button
                  className="btn btn--add"
                  onClick={()=>{handleClick(item.id,item)}}
                >
                  ADD
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        "dang tai du lieu"
      )}
    </>
  );
}

export default Home;
