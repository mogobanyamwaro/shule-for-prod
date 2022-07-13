import React from 'react';
import Search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.svg';
import back from '../../../assets/back.png';
import cart from '../../../assets/cart.png';
import {
  PaymentMethod,
  SchoolNavbar,
  Slider,
  UserInformation,
} from '@shule/web/containers';
import { Button, CartContainer } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';
function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      {' '}
      <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
      <h1 className="text-center text-main font-bold text-xl py-10">
        Checkout
      </h1>
      <div className="md:flex md:justify-between md:flex-wrap md:max-w-5xl md:mx-auto">
        <div className="shadow-xl my-8 py-4 px-2 border-t-2 border-gray md:w-1/3 md:max-w-md">
          <h1 className="text-main font-bold text-2xl">Personal Information</h1>
          <UserInformation name="To:" subName="John Doe" />
          <UserInformation name="Address" subName="JohnDoe@gmail.com" />
          <UserInformation name="Phone" subName="0700112233" />
        </div>
        <div className="shadow-xl my-8 py-4 px-2 border-t-2 border-gray md:w-1/3 md:max-w-md md:mx-5">
          <h1 className="text-main font-bold text-2xl">Total Amount</h1>
          <div className="flex justify-between items-center pt-5">
            <div className="flex items-center">
              <h1 className="text-main text-xl font-bold ">Items total</h1>
            </div>
            <div>KSH. 20.02</div>
          </div>
          <div className="flex justify-between items-center pt-5">
            <div className="flex items-center">
              <h1 className="text-main text-xl font-bold ">VAT</h1>
            </div>
            <div>KSH. 0.02</div>
          </div>
          <div className="flex justify-between items-center pt-5">
            <div className="flex items-center">
              <h1 className="text-main text-xl font-bold ">Delivery Fees</h1>
            </div>
            <div>KSH. 20.02</div>
          </div>
          <div className="flex justify-between items-center pt-10">
            <div className="flex items-center">
              <h1 className="text-main text-2xl font-bold ">Total</h1>
            </div>
            <div>KSH. 120.02</div>
          </div>
          <div className="flex justify-end py-5">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-2"
              py="py-1"
              textColor="text-main"
            >
              Modify Cart
            </Button>
          </div>
        </div>
        <div className="md:max-w-md md:w-1/3">
          <PaymentMethod />
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-8"
          py="py-2"
          onClick={() => navigate('/order-success')}
          textColor="text-main"
        >
          Finish
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
