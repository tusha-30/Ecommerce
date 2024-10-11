import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        ></input>
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        ></input>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          ></input>
        </div>
        <input
          type="numebr"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        ></input>
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                src={assets.stripe_logo}
                alt="stripe_logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("razorpay")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="razorpay_logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              >
                {" "}
              </p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button className="bg-black text-white px-16 py-3 text-sm" onClick={()=>navigate('/orders')}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
