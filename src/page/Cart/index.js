import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownProducts, UpProducts, del, delALL } from "../../Actions";

function Cart() {
  const cart = useSelector((state) => state.CartReducers);
  const dispatch = useDispatch();
  const InputRef = useRef();

  const total = cart.reduce((sum, money) => {
    const newPrice = (
      (money.info.price * (100 - money.info.discountPercentage)) /
      100
    ).toFixed(0);
    return sum + money.quantity * newPrice;
  }, 0);

  const handleUp = (id) => {
    dispatch(UpProducts(id));
    InputRef.current.value += 1;
  };
  const handleDown = (id, item) => {
    if (item.quantity > 1) {
      dispatch(DownProducts(id));
      InputRef.current.value -= 1;
    }
  };
  return (
    <>
      <div className="Cart__head">
        <h3>giỏ hàng</h3>
        <button onClick={()=>dispatch(delALL())}>xóa tất cả</button>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="Cart">
            {cart.map((item) => (
              <div className="Cart__item" key={item.id}>
                <div className="Cart__display">
                  <div className="Cart__img">
                    <img src={item.info.thumbnail} alt={item.info.title} />
                  </div>
                  <div className="Cart__content">
                    <h4 className="main__title">{item.info.title}</h4>
                    <div className="main__price-new">
                      {(
                        (item.info.price *
                          (100 - item.info.discountPercentage)) /
                        100
                      ).toFixed(0)}
                      $
                    </div>
                    <div className="main__price-old">{item.info.price}$</div>
                  </div>
                </div>
                <div className="Cart__btn">
                  <button
                    className="btn--one"
                    onClick={() => {
                      handleUp(item.id);
                    }}
                  >
                    +
                  </button>
                  <input ref={InputRef} value={item.quantity} />
                  <button
                    className="btn--one"
                    onClick={() => {
                      handleDown(item.id, item);
                    }}
                  >
                    -
                  </button>
                  <button onClick={()=>dispatch(del(item.id))}>Xoa</button>
                </div>
              </div>
            ))}
          </div>
          <div className="Cart__pay">
            <div>thanh toan:{total}$</div>
          </div>
        </>
      ) : (
        "gio hanh trong"
      )}
    </>
  );
}

export default Cart;
