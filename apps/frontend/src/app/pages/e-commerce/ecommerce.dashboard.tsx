import { Carousel, SchoolNavbar, Slider } from '@shule/web/containers';
import React from 'react';
import Search from '../../../assets/search.png';
import Logo from '../../../assets/Logo.png';
import back from '../../../assets/back.png';
import cart from '../../../assets/cart.png';
import { CommerceMedia, Footer } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';

function EcommerceDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pb-12 px-5">
        <SchoolNavbar Logo={Logo} Search={Search} cart={cart} />
        <h1 className="font-bold text-main text-xl md:mt-10 ">
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

        <div className="flex  w-full md:justify-between overflow-x-scroll ">
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

        <div className="md:mt-5">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
            ]}
            title="On offer today"
          />
        </div>
        <div className="md:mt-5">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
            ]}
            title="Art and Craft collection"
          />
        </div>
        <div className="md:mt-5">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                schoolType: 'KSH 20.21',
                onClick: () => navigate('/view-school-details/1233'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'KSH 20.21',
                onClick: () => navigate('/view-school-details/1233'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'KSH 20.21',
                onClick: () => navigate('/view-school-details/1233'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'KSH 20.21',
                onClick: () => navigate('/view-school-details/1233'),
              },
              {
                image: 'https://picsum.photos/800',
                schoolType: 'KSH 20.21',
                onClick: () => navigate('/view-school-details/1233'),
              },
            ]}
            title="Crazy Deals"
          />
        </div>
        <div className="md:mt-5">
          <Slider
            items={[
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
              {
                image: 'https://picsum.photos/800',
                price: '1000',
                product: 'product 1',
                onClick: () => navigate('/product-details/1234'),
              },
            ]}
            title="Other Category"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EcommerceDashboard;
