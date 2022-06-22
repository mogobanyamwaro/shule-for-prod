import '../index.css';
/* eslint-disable-next-line */
export interface CartProps {
  item: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartContainer(props: CartProps) {
  const { item, price, quantity, image } = props;
  return (
    <div className="flex items-center pr-2  w-full h-36 shadow-lg border-b-2 border-gray md:max-w-sm  ">
      <div>
        <img src={image} alt="" className="h-28 w-28" />
      </div>
      <div className="flex flex-col justify-between ml-5 h-28">
        <h3 className="text-main font-bold">{item}</h3>
        <p className="text-mainLight font-bold"> KSH. {price}</p>
        <div className="flex items-center justify-between ">
          <p className="bg-primary font-bold text-2xl px-2 cursor-pointer">-</p>
          <p className="font-bold px-2">{quantity}</p>
          <p className="bg-primary font-bold text-2xl px-2 cursor-pointer">+</p>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
