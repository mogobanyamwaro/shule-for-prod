import { Button } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';
import '../index.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  Logo: string;
}

export function Navbar(props: NavbarProps) {
  const { Logo } = props;
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-end absolute md:max-w-5xl md:mx-auto">
      <div className="flex w-8/12 justify-between pt-3 px-3 ">
        <div>
          <img
            src={Logo}
            alt=""
            onClick={() => navigate('/')}
            className="h-8 w-12"
          />
        </div>
        <div className="">
          <Button
            bgColor="bg-primaryDark"
            bgColorHover="bg-primaryDark"
            textColor="text-main"
            px="px-4"
            onClick={() => navigate('/login')}
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
