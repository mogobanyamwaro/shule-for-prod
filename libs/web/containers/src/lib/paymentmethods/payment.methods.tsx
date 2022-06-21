import React from 'react';

export function PaymentMethod() {
  return (
    <div className="shadow-lg border-b-2 border-white py-4 px-2">
      <h1 className="text-main text-2xl font-bold text-center py-2">
        Preferred Payment Method
      </h1>
      <div className="flex items-center justify-between mb-4">
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-xl font-bold 
     text-main dark:text-gray-300"
        >
          Cash
        </label>
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-main bg-main
       focus:ring-main   "
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-xl font-bold
     text-main dark:text-main"
        >
          MPESA
        </label>
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-main bg-main
       focus:ring-main   "
        />
      </div>
    </div>
  );
}

export default PaymentMethod;
