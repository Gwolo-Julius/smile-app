import React from "react";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* @@@@@@@ left section @@@@@@ */}
      <div className="w-full flex flex-col gap-4 sm:max-w-[480px] bg-orange-100">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
        </div>
      </div>
      <p>Place order page</p>
    </div>
  );
};

export default PlaceOrder;
