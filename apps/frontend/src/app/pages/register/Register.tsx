import { Button } from '@shule/web/components';
import { useState } from 'react';
import {
  IndividualRegistration,
  InstitutionRegistration,
} from '@shule/web/containers';
import authLogo from '../../../assets/auth.png';
import back from '../../../assets/back.png';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [isIndividual, setIsIndividual] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center px-5 ">
      <img
        src={back}
        alt=""
        onClick={() => navigate('/')}
        className="absolute top-7 left-5 cursor-pointer"
      />
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
        {!isIndividual && <InstitutionRegistration />}
        {isIndividual && <IndividualRegistration />}
        <div>
          <p className="text-green py-3">Sign up as:</p>
          <div className="flex justify-around">
            <Button
              bgColor="bg-main"
              bgColorHover="bg-main"
              px="px-3"
              py="py-2"
              textColor="text-white"
              onClick={() => setIsIndividual(false)}
            >
              Institution
            </Button>
            <Button
              bgColor="bg-main"
              bgColorHover="bg-main"
              px="px-3"
              py="py-2"
              textColor="text-white"
              onClick={() => setIsIndividual(true)}
            >
              Individual
            </Button>
          </div>
        </div>

        <hr className="mt-5" />

        <div
          className="pb-10 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          <p className="pt-5">
            Already have an account?{' '}
            <small className="text-main">Sign in</small>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
