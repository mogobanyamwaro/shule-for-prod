import { Button, Input } from '@shule/web/components';
import '../index.css';
/* eslint-disable-next-line */

export function InstitutionRegistration() {
  return (
    <form className="max-w-lg flex flex-col items-center">
      <div className="pb-0 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Institution Email
        </p>
        <Input bgColor="bg-primary" py="py-2" type="email" />
      </div>
      <div className="pb-0 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Institution Name
        </p>
        <Input bgColor="bg-primary" py="py-2" type="email" />
      </div>
      <div className="pb-5 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Telephone
        </p>
        <Input bgColor="bg-primary" py="py-2" type="tel" />
      </div>
      <div className="pb-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          create password
        </p>
        <Input bgColor="bg-primary" py="py-2" type="password" />
      </div>
      <div className="pb-10">
        <p className="text-green text-xs font-bold text-center pb-3">
          confirm password
        </p>
        <Input bgColor="bg-primary" py="py-2" type="password" />
      </div>
      <Button
        bgColor="bg-main"
        bgColorHover="bg-main"
        px="px-16"
        py="py-2"
        textColor="text-white"
      >
        Register
      </Button>
    </form>
  );
}

export default InstitutionRegistration;
