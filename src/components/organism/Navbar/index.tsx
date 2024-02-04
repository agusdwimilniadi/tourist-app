import { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import Image from '../../atoms/Images';
import NavGroup from '../../molecules/NavGroup';
import { Transition } from '@headlessui/react';
import { IoMdCloseCircle } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuthUser, useSignOut } from 'react-auth-kit';

const Navbar = () => {
  const [showNavMobile, setSetShowMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const authData = useAuthUser();
  const signOut = useSignOut();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          scrolling ? 'bg-primary-2' : 'bg-transparent'
        } flex text-white items-center transition-all p-5 justify-between md:px-28 fixed top-0 w-full`}
      >
        <div>
          <Image
            src="/assets/images/logo-white-tourism.png"
            alt="logo-white"
            className="w-36"
          />
        </div>
        <div className="hidden md:flex">
          <NavGroup />
        </div>
        <div className="md:hidden">
          <Button
            onClick={() => setSetShowMobile(!showNavMobile)}
            variant="secondary"
            className="w-fit"
          >
            <GiHamburgerMenu />
          </Button>
        </div>
        <div className="hidden md:block">
          <Button
            onClick={() => signOut()}
            variant="secondary"
            className="text-sm bg-white text-black p-2 rounded"
          >
            Logout {authData()?.name}
          </Button>
        </div>
      </nav>
      <Transition
        show={showNavMobile}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full h-screen flex-col items-center justify-center absolute top-0 left-0 right-0 text-white flex bg-primary-1">
          <NavGroup />
          <Button
            variant="primary"
            onClick={() => setSetShowMobile(!showNavMobile)}
            className="fixed bg-white p-3 rounded-full text-primary-2 hover:scale-100 top-5 right-5 "
          >
            <IoMdCloseCircle size={20} />
          </Button>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
