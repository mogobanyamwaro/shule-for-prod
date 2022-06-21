import {
  PaymentMethod,
  SchoolNavbar,
  UserInformation,
} from '@shule/web/containers';
import React from 'react';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.png';
import Search from '../../../assets/search.png';
import cart from '../../../assets/cart.png';
import { Button } from '@shule/web/components';
function UpdateUserProfile() {
  return (
    <div className="px-5">
      {' '}
      <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
      <div className="flex w-8/12 justify-between pt-8">
        <img src={back} alt="" className="h-9" />
        <h1 className="text-main font-bold text-xl">Welcome, John Doe</h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://picsum.photos/800"
          alt=""
          className="w-1/3 h-1/3  rounded-full"
        />
      </div>
      <div className="shadow-xl my-8 py-4 px-2 border-t-2 border-gray">
        <h1 className="text-main font-bold text-2xl">Personal Information</h1>
        <UserInformation name="Name" subName="John Doe" />
        <UserInformation name="Email Address" subName="JohnDoe@gmail.com" />
        <UserInformation name="Phone" subName="0700112233" />
        <UserInformation name="Password" subName="************" />
      </div>
      <div className="shadow-xl my-8 py-4 px-2 border-t-2 border-gray">
        <h1 className="text-main font-bold text-2xl">Delivery Information</h1>
        <UserInformation
          name="Address 1"
          subName="Kenyatta University, Thika Road"
        />
        <UserInformation name="County" subName="Nairobi" />
        <UserInformation name="Estate" subName="Kenyatta University" />
        <br />
        <UserInformation name="Address2" subName="Nakru CBD,Nakuru" />
        <UserInformation name="County" subName="Nakuru" />
        <UserInformation name="Estate" subName="Nakuru" />
      </div>
      <PaymentMethod />
      <div className="py-5 flex justify-center">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-10"
          py="py-2"
          textColor="text-main"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default UpdateUserProfile;
