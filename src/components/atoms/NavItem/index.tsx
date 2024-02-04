import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return isActive ? (
    <Link to={to} className=" text-white text- ">
      {children}
      <div className="bg-white w-[60%] mx-auto h-[2px] mt-2"></div>
    </Link>
  ) : (
    <Link to={to} className="text-info  text-">
      {children}
      <div className="bg-transparent w-[60%] mx-auto h-[2px] mt-2"></div>
    </Link>
  );
};

export default NavItem;
