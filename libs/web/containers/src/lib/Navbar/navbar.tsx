import { Button } from '@shule/web/components';
import { useToken } from '@shule/web/helpers';
import { unsetToken, useAppDispatch } from '@shule/web/redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../index.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  Logo: string;
}

export function Navbar(props: NavbarProps) {
  const { Logo } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useToken();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    dispatch(unsetToken());
  };
  return (
    <div className="w-full flex justify-end absolute md:max-w-5xl md:mx-auto">
      <div className="flex w-7/12 md:w-11/12 justify-between items-center pt-3 md:pt-0 px-3 ">
        <div>
          <img
            src={Logo}
            alt=""
            onClick={() => navigate('/')}
            className="h-24 md:h-32 w-24 md:w-32 cursor-pointer"
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
              py="py-2"
            >
              <Link to={'/login'}>log in</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
