import { Button, Input, Media } from '@shule/web/components';
import React from 'react';
import { Slider } from '../Slider';

export function ProfileForm() {
  return (
    <form className="px-5 pb-5 ">
      <div className="md:flex md:items-center md:justify-between md:max-w-5xl md:mx-auto">
        <div className="py-5 md:max-w-md">
          <h1 className="text-main text-xl font-semibold">Basic Info</h1>
          <h2 className="text-main font-semibold">About</h2>
          <p className="text-xs ">
            Please tell us about your school (max 500 words)
          </p>
          <Input bgColor="bg-primaryDark" py="py-4" type="textarea" />
        </div>
        <div className="pb-5 md:max-w-sm md:mr-36">
          <h2 className="text-main font-semibold">Location</h2>
          <p className="text-xs">Where is your school located?</p>
          <Input bgColor="bg-primaryDark" py="py-2" type="text" />
        </div>
      </div>
      <div className="pb-5 md:max-w-5xl md:mx-auto ">
        <h1 className="text-main font-semibold">Contact</h1>
        <p className="text-xs">Please provide links where applicable</p>

        <div className="md:flex md:items-center md:justify-between">
          <div className="py-5 md:max-w-md">
            <h1 className="text-main font-semibold">Email</h1>
            <Input bgColor="bg-primaryDark" py="py-2" type="email" />
          </div>
          <div className="pb-5 md:max-w-md">
            <h1 className="text-main font-semibold">Phone</h1>
            <Input bgColor="bg-primaryDark" py="py-2" type="tel" />
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="pb-5">
            <h1 className="text-main font-semibold">Facebook</h1>
            <Input bgColor="bg-primaryDark" py="py-2" type="url" />
          </div>
          <div>
            <h1 className="text-main font-semibold">Instagram</h1>
            <Input bgColor="bg-primaryDark" py="py-2" type="url" />
          </div>
        </div>
      </div>
      <div className="pb-5 md:max-w-5xl md:mx-auto">
        <h1 className="text-main font-semibold">Education</h1>
        <div className="md:flex md:items-center md:justify-between">
          <div className="py-5">
            <h2 className="text-main font-semibold pb-2">Education System</h2>
            <p className="text-xs pb-1">8-4-4/CBC, British/American,IB</p>
            <Input bgColor="bg-primaryDark" py="py-2" type="text" />
          </div>
          <div className="pb-5">
            <h2 className="text-main font-semibold pb-2">Education Levels</h2>
            <p className="text-xs pb-1">
              Pre-primary,Primary, Secondary, Speacial Needs
            </p>
            <Input bgColor="bg-primaryDark" py="py-2" type="text" />
          </div>
        </div>
        <div>
          <h1 className="text-main font-semibold pb-2">
            Performance Statistics in the last National Exam{' '}
          </h1>
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs pb-1">Please upload document</p>
              <Input bgColor="bg-primaryDark" py="py-2" type="file" />
            </div>
            <div className="py-5">
              <h2 className="text-main font-semibold pb-2">
                Licensing and Certificatiion
              </h2>
              <div>
                <p className="text-xs pb-1">Please upload document</p>
                <Input bgColor="bg-primaryDark" py="py-2" type="file" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p className="text-xs pb-3">
          Here are few things you may need for your school:
        </p>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/700',
              product: 'Product 1',
              price: '100.24',
            },
            {
              image: 'https://picsum.photos/700',
              product: 'River and the sourse',
              price: '13340.24',
            },
            {
              image: 'https://picsum.photos/700',
              product: 'Pens and pencils',
              price: '453.24',
            },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-16"
          py="py-2"
          textColor="text-main"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;
