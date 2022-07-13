import { Button } from '@shule/web/components';
import { useToken } from '@shule/web/helpers';
import { unsetToken, useAppDispatch } from '@shule/web/redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import MobileNav from './mobile.nav';
/* eslint-disable-next-line */
export interface NavbarProps {
  Logo: string;
}

export function Navbar(props: NavbarProps) {
  const [showNav, setShowNav] = useState(false);
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
    <div className="w-full flex justify-end absolute ">
      <div className="flex w-full  justify-between items-center pt-3 md:pt-0 px-3 ">
        <svg
          className="w-8 h-8 mx-2 text-2xl cursor-pointer mr-16 fill-main md:hidden "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => setShowNav(!showNav)}
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
        <MobileNav
          handleLogout={handleLogout}
          showNav={showNav}
          tokens={token}
        />
        <div>
          <img
            src={Logo}
            alt=""
            onClick={() => navigate('/')}
            className="h-24 md:h-32 w-24 md:w-32 cursor-pointer"
          />
        </div>

        <Link to={'/'}>
          <p className="text-main md:block hidden">Home</p>
        </Link>
        <Link to="/view-schools">
          {' '}
          <p className="text-main  md:block hidden">Schools</p>
        </Link>
        <Link to="#">
          {' '}
          <p className="text-main  md:block hidden">Contact Us</p>
        </Link>
        <Link to="/register-institution">
          {' '}
          <p className="text-main  md:block hidden">Partner with us</p>
        </Link>
        <Link to="/ecommerce-dashboard">
          {' '}
          <p className="text-main  md:block hidden">shop</p>
        </Link>

        {token ? (
          <div className="">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              textColor="text-main"
              px="px-5"
              onClick={handleLogout}
              py="py-2"
              height="h-16 "
              width="w-32"
              textSize="text-xl"
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
              height="h-16 "
              width="w-32"
              textSize="text-xl"
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
