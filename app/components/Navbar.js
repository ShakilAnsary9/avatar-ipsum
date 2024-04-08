import Image from "next/image";
import ColorSwitch from "./ColorSwitch";
import Avatar from "/public/avatar-logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-semibold text-2xl whitespace-nowrap text-slate-700 dark:text-slate-400">
            <Image src={Avatar} alt="Avatar" width={120} />
          </span>
        </a>
        <div className="items-center justify-between w-8 md:flex md:w-auto md:order-1">
          <ColorSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
