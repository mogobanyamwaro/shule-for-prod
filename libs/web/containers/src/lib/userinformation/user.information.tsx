import { Button } from '@shule/web/components';
import React from 'react';

export interface UserInformationProps {
  name: string;
  subName: string;
}

export function UserInformation(props: UserInformationProps) {
  const { name, subName } = props;
  return (
    <div className="flex justify-between items-center pt-5">
      <div className="flex items-center">
        <h1 className="text-main text-xl font-bold ">{name}:</h1>
        <p className="ml-4 text-xl ">{subName}</p>
      </div>
      <div>
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-2"
          py="py-1"
          textColor="text-main"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default UserInformation;
