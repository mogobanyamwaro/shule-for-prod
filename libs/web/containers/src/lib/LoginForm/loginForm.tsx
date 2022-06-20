import { Button, Input } from '@shule/web/components';
import '../index.css';
/* eslint-disable-next-line */

export function LoginForm() {
  return (
    <form className="max-w-lg flex flex-col items-center">
      <div className="pb-10 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">Email</p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <div className="pb-10">
        <p className="text-green text-xs font-bold text-center pb-3">
          Password
        </p>
        <Input bgColor="bg-primary" py="py-2" />
      </div>
      <Button
        bgColor="bg-main"
        bgColorHover="bg-main"
        px="px-16"
        py="py-2"
        textColor="text-white"
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
