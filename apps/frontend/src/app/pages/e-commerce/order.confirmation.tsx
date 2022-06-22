import { Button } from '@shule/web/components';
import back from '../../../assets/back.png';

function OderConfirmation() {
  return (
    <div className="px-5">
      <div className="flex items-center">
        <img src={back} alt="back" className="h-10 mr-10" />
        <h1 className=" text-main font-bold text-4xl py-10">
          Order Confirmation
        </h1>
      </div>
      <h1 className="font-bold text-4xl  pb-10">Order Details</h1>
      <div className="flex pb-4">
        <h1 className=" text-main font-bold text-3xl mr-4 ">To:</h1>
        <p className="font-semibold  text-grayDark text-3xl">John Doe</p>
      </div>
      <div className="flex pb-4 items-center">
        <h1 className=" text-main font-bold text-3xl mr-4 ">Address:</h1>
        <p className="font-semibold  text-grayDark text-3xl">
          Kenyatta University, Thika Road
        </p>
      </div>
      <div className="flex pb-4 items-center">
        <h1 className=" text-main font-bold text-3xl mr-4 ">Phone:</h1>
        <p className="font-semibold  text-grayDark text-3xl">0700112233</p>
      </div>
      <div className="flex pb-4 justify-between">
        <h1 className=" text-main font-bold text-4xl mr-4 ">Total</h1>
        <p className="font-semibold  text-black text-3xl">Kshs. 1234</p>
      </div>
      <div className="flex pb-4 justify-between">
        <h1 className=" text-main font-bold text-4xl mr-4 ">Payment Method</h1>
        <p className="font-semibold  text-main text-3xl">MPESA</p>
      </div>
      <div className="flex justify-center">
        <Button
          bgColor="bg-primaryDark"
          bgColorHover="bg-primaryDark"
          px="px-12"
          py="py-3"
          textColor="text-main"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default OderConfirmation;
