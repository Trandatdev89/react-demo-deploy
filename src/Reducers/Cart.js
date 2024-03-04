function CartReducers(state = [], action) {
  const newState = [...state];
  let kk = 0;
  switch (action.type) {
    case "ADD":
      return [
        ...newState,
        {
          id: action.id,
          info: action.item,
          quantity: 1,
        },
      ];
    case "UPDATE":
      const result = newState.find((item) => item.id === action.id);
      result.quantity += 1;
      return newState;
    case "Up":
      const up = newState.find((item) => item.id === action.id);
      up.quantity += 1;
      return newState;
    case "Down":
      const down = newState.find((item) => item.id === action.id);
      down.quantity -= 1;
      return newState;
    case "DELETE":
      const del = newState.filter((item) => item.id !== action.id);
      return del;
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
}

export default CartReducers;
