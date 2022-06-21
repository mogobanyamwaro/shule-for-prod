import { Button, Input } from '@shule/web/components';
import React from 'react';

export function CreateUserForm() {
  return (
    <form className="max-w-lg flex flex-col ">
      <div className=" pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          First Name
        </p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <div className=" pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Last Name
        </p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <div className=" pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">Gender</p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <div className="py-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Date of Birth
        </p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <div className="flex justify-center">
        {' '}
        <Button
          bgColor="bg-main"
          bgColorHover="bg-main"
          px="px-16"
          py="py-2"
          textColor="text-white"
        >
          Next
        </Button>
      </div>
    </form>
  );
}

export default CreateUserForm;
