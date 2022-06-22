import { Button } from '@shule/web/components';
import { useNavigate } from 'react-router-dom';

export function OrderSucces() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" mt-5 text-center">
        <div className="success-animation">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <h2>Your Order has been placed successfully.</h2>

        <div className="flex justify-center py-5">
          <Button
            bgColor="bg-primaryDark"
            bgColorHover="bg-primaryDark"
            px="px-2"
            py="py-1"
            onClick={() => navigate('/')}
            textColor="text-main"
          >
            Go to Orders
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderSucces;
