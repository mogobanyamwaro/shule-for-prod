import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  tokens: any;
  handleLogout: () => void;
  showNav: boolean;
}

function MobileNav(props: IProps) {
  return (
    <li
      className={` w-24 flex-col ${
        props.showNav ? 'flex' : 'hidden'
      } absolute left-1 top-10 bg-white  items-start justify-around  md:hidden transition-height duration-300 `}
    >
      <Link
        className=" font-medium cursor-pointer text-main  px-6"
        to="/ecommerce-dashboard"
      >
        Shop
      </Link>
      <Link
        className=" font-medium cursor-pointer text-main  px-6"
        to="/view-schools"
      >
        Schools
      </Link>
      <Link
        className=" font-medium cursor-pointer text-main  px-6"
        to="/register-institution"
      >
        Partner with us
      </Link>
      {/* <Link
        className="text-l font-bold cursor-pointer text-secondary  px-6"
        to="/contact"
      >
        Contact Us
      </Link> */}
    </li>
  );
}

export default MobileNav;
