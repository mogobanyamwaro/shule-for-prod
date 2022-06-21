import { CreateUserForm } from '@shule/web/containers';
import React from 'react';
import back from '../../../assets/back.png';

function CreateUserProfile() {
  return (
    <div className="px-5">
      <div className="flex w-8/12 justify-between py-10">
        <img src={back} alt="" className="h-9" />
        <h1 className="text-green text-3xl font-bold">Welcome</h1>
      </div>

      <div className="flex justify-between items-center pb-10">
        <div className="w-1/3 h-1/3 rounded-full flex justify-center items-center">
          <img
            src="https://picsum.photos/800"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-green text-2xl font-bold py-3">
            Provide a profile photo
          </h1>
          <p className="italic text-green pb-3">Browse from device:</p>

          <div className="">
            <label
              className=" w-24 flex flex-col items-center px-2 py-1
             bg-mainLight text-blue rounded-md shadow-lg tracking-wide
             border border-blue cursor-pointer hover:bg-blue text-white"
            >
              <span className=" text-xl leading-normal">Upload</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <CreateUserForm />
      <hr className="mt-5" />

      <div className="pb-10">
        <p className="pt-5">
          Already have an account? <small className="text-main">Sign in</small>{' '}
        </p>
      </div>
    </div>
  );
}

export default CreateUserProfile;
