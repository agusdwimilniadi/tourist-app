import { Link } from 'react-router-dom';
import Images from '../../atoms/Images';

const AuthLayout = ({
  isLogin,
  children,
}: {
  isLogin?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <section className="h-screen bg-primary-1 flex justify-center items-center">
      <div className="grid grid-cols-1 px-5 py-5 md:py-32  rounded-lg gap-3 items-center bg-white justify-center md:justify-center md:items-center md:gap-5 md:grid-cols-3 mx-10">
        <div className="flex gap-3 flex-col items-center justify-center md:ps-10">
          <Images
            src="/assets/images/logo-colored.png"
            alt="logo-tourist-app"
            className="w-20 md:w-40"
          />
          <h1 className="text-xl md:text-3xl  text-center font-medium">
            Sign-In to Access <br /> TouristApp
          </h1>
          {isLogin ? (
            <p className="text-center text-xs md:text-base">
              If you don’t have account,{' '}
              <Link className="font-semibold text-primary-1" to={'/register'}>
                Register here
              </Link>
            </p>
          ) : (
            <p className="text-center text-xs md:text-base">
              If you have an account,{' '}
              <Link className="font-semibold text-primary-1" to={'/login'}>
                Login here
              </Link>
            </p>
          )}
        </div>
        <div className="col-span-2 mt-5 md:ms-20 ">{children}</div>
      </div>
    </section>
  );
};

export default AuthLayout;
