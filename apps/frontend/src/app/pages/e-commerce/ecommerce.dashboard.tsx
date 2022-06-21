import { Carousel, SchoolNavbar, Slider } from '@shule/web/containers';
import React from 'react';
import Search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.png';
import back from '../../../assets/back.png';
import cart from '../../../assets/cart.png';
import { CommerceMedia } from '@shule/web/components';

function EcommerceDashboard() {
  return (
    <div className="pb-12 px-5">
      <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
      <h1 className="font-bold text-main text-xl ">
        Browse our vast categories of products{' '}
      </h1>
      <Carousel
        resources={[
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
          {
            title: 'Find me on Twitter',
            link: 'https://twitter.com/kendalmintcode',
            imageUrl: 'https://placeimg.com/300/300/any',
          },
        ]}
      />

      <div className="flex  w-full  overflow-x-scroll ">
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
        />
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
        />
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
        />
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
        />
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
        />
        <CommerceMedia
          imageUrl="https://picsum.photos/800"
          title="writing material"
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
          title="On offer today"
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
          title="Art and Craft collection"
        />
      </div>
      <div>
        <Slider
          items={[
            {
              image: 'https://picsum.photos/800',
              schoolType: 'KSH 20.21',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'KSH 20.21',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'KSH 20.21',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'KSH 20.21',
            },
            {
              image: 'https://picsum.photos/800',
              schoolType: 'KSH 20.21',
            },
          ]}
          title="Crazy Deals"
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
          title="Other Category"
        />
      </div>
    </div>
  );
}

export default EcommerceDashboard;
