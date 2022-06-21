import { Button, Input, Select } from '@shule/web/components';
import { PaymentMethod } from '@shule/web/containers';
import React from 'react';
import back from '../../../assets/back.png';
function Addresspayment() {
  return (
    <div className="px-5">
      <div className="flex w-8/12 justify-between py-10">
        <img src={back} alt="" className="h-9" />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://picsum.photos/800"
          alt=""
          className="w-1/3 h-1/3  rounded-full"
        />
      </div>
      <h1 className="text-green text-2xl text-center font-Montserrat pt-5 pb-10">
        Address and Payment
      </h1>

      <div className="pb-10">
        <p className="text-md font-semibold font-Montserrat mb-4">
          Select Country
        </p>
        <Select
          name="country"
          options={['Afghanistan', 'Albania', 'Algeria', 'Andorra']}
          firstOption="Select Country"
        />
      </div>
      <div className="pb-10">
        <p className="text-md font-semibold font-Montserrat mb-4">
          Select city/Town
        </p>
        <Select
          name="country"
          options={['Afghanistan', 'Albania', 'Algeria', 'Andorra']}
          firstOption="Select city/Town"
        />
      </div>
      <div>
        <p className="text-md font-semibold font-Montserrat mb-4">
          Choose Estate
        </p>
        <Select
          name="country"
          options={['Afghanistan', 'Albania', 'Algeria', 'Andorra']}
          firstOption="Choose Estate"
        />
      </div>

      <PaymentMethod />
      <div className="py-4 flex justify-center">
        <Button
          bgColor="bg-main"
          bgColorHover="bg-main"
          px="px-10"
          py="py-2"
          textColor="text-white"
        >
          Finish
        </Button>
      </div>
      <hr className="mt-5" />

      <div className="pb-10">
        <p className="pt-5">
          Already have an account? <small className="text-main">Sign in</small>{' '}
        </p>
      </div>
    </div>
  );
}

export default Addresspayment;
