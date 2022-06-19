import { Button } from '@shule/web/components';
import '../index.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  Logo: string;
}

export function Navbar(props: NavbarProps) {
  const { Logo } = props;
  return (
    <div className="w-full flex justify-end absolute">
      <div className="flex w-8/12 justify-between pt-3 px-3 ">
        <div>
          <img src={Logo} alt="" className="h-8 w-12" />
        </div>
        <div>
          <Button
            bgColor="bg-primaryDark"
            bgColorHover="bg-primaryDark"
            textColor="text-main"
            px="px-4"
            py="py-1"
          >
            log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
