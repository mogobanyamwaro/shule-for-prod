import React from 'react';
import Search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.png';
import back from '../../../assets/back.png';
import cart from '../../../assets/cart.png';
import { SchoolNavbar, Slider } from '@shule/web/containers';
import { Button, CartContainer } from '@shule/web/components';
export function Cart() {
  return (
    <div className="px-5 pb-10">
      {' '}
      <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
      <h1 className="text-center text-main font-bold text-xl py-10">Cart</h1>
      <CartContainer
        image="https://picsum.photos/800"
        item="T shirt"
        price={20.34}
        quantity={2}
      />
      <CartContainer
        image="https://picsum.photos/800"
        item="T shirt"
        price={20.34}
        quantity={2}
      />
      <CartContainer
        image="https://picsum.photos/800"
        item="T shirt"
        price={20.34}
        quantity={2}
      />
      <div className="flex py-6 justify-center items-center">
        <h1 className=" text-main font-bold text-2xl mr-4">Total :</h1>
        <h1 className="text-mainDark font-bold text-2xl">KSH. 20.02</h1>
      </div>
      <div className="flex justify-center">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-12"
          py="py-2"
          textColor="text-main"
        >
          Proceed to Checkout
        </Button>
      </div>
      <div>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
          ]}
          title="Similar Products"
        />
      </div>
      <div>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/800',
              schoolType: 'school 2',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'school 2',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'school 2',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'school 2',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'school 2',
            },
          ]}
          title="Browse Schools"
        />
      </div>
      <div>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
            {
              image: 'https://picsum.photos/800',
              price: '1000',
              product: 'product 1',
            },
          ]}
          title="Also Viewed"
        />
      </div>
    </div>
  );
}

export default Cart;
