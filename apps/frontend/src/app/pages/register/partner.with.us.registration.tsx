import { Button } from '@shule/web/components';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '@shule/web/redux';
import 'react-toastify/dist/ReactToastify.css';
import {
  IndividualRegistration,
  InstitutionRegistration,
} from '@shule/web/containers';
import authLogo from '../../../assets/auth.png';
import back from '../../../assets/back.png';
import { Link, useNavigate } from 'react-router-dom';
function RegisterInstitution() {
  const [isIndividual, setIsIndividual] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loading = useAppSelector((state) => state.auth.loading);
  const navigate = useNavigate();

  if (loading)
    return (
      <>
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-24 h-24 border-l-2 border-gray rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 border-green rounded-full animate-spin"></div>
        </div>
      </>
    );

  return (
    <div className="flex justify-center items-center px-5 ">
      <img
        src={back}
        alt=""
        onClick={() => navigate('/')}
        className="absolute top-7 left-5 cursor-pointer"
      />
      {error && (
        <div>
          {toast.error(error)}
          <ToastContainer />
        </div>
      )}
      <div className="mt-24">
        <div>
          <img
            src={authLogo}
            className="cursor-pointer"
            onClick={() => navigate('/')}
            alt=""
          />
        </div>
        <h2 className="text-green font-bold text-2xl text-center pt-5">
          Welcome
        </h2>
        <InstitutionRegistration setError={setError} />
        {/* {!isIndividual && <IndividualRegistration setError={setError} />} */}

        <hr className="mt-5" />

        <div className="pb-10 cursor-pointer">
          <Link to={'/login'}>
            <p className="pt-5">
              Already have an account?{' '}
              <small className="text-main">Sign in</small>{' '}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterInstitution;
