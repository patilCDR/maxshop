import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../../store/actions/CartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const cartCount = useSelector((state) => state.cart.count) || 0;
  console.log("cartCount", cartCount);

  return (
    <div>
      <center>
        <h1>Cart</h1>
        <Button onClick={() => dispatch(Increment(cartCount))}>+</Button>
        <span className="mx-4">{cartCount}</span>
        <Button onClick={() => cartCount > 0 && dispatch(Decrement(cartCount))}>
          -
        </Button>
      </center>
    </div>
  );
};

export default Cart;
