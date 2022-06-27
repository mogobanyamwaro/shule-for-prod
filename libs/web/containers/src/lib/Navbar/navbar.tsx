import { Button } from '@shule/web/components';
import { useToken } from '@shule/web/helpers';
import { useNavigate } from 'react-router-dom';
import '../index.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  Logo: string;
}

export function Navbar(props: NavbarProps) {
  const { Logo } = props;
  const navigate = useNavigate();
  const token = useToken();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div className="w-full flex justify-end absolute md:max-w-5xl md:mx-auto">
      <div className="flex w-8/12 justify-between items-center pt-3 px-3 ">
        <div>
          <img
            src={Logo}
            alt=""
            onClick={() => navigate('/')}
            className="h-24 w-24"
          />
        </div>
        {token ? (
          <div className="">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              textColor="text-main"
              px="px-5"
              onClick={handleLogout}
              py="py-2"
            >
              logout
            </Button>
          </div>
        ) : (
          <div className="">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              textColor="text-main"
              px="px-5"
              onClick={() => navigate('/login')}
              py="py-2"
            >
              log In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
