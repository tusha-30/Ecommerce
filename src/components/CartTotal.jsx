import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const cartAmount = Number(getCartAmount());

  return (
    <div className="w-full">
      <div className="tex-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {cartAmount}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {cartAmount === 0 ? "0" : cartAmount + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
