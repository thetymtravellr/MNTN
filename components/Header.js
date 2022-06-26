import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import Nav from "./Nav";

const Hero = () => {
  return (
    <header className="py-8 px-12 min-h-[150vh]">
      <Nav />
      <div className="min-h-[80vh] grid place-content-center">
      <div className="flex items-center space-x-2 text-yellow-900 mb-6">
              <div className="w-16 h-[2px] bg-yellow-900"></div>
              <p className=" text-xs font-bold uppercase tracking-widest block">
              A Hiking guide
              </p>
            </div>
        <h1 className="text-7xl capitalize">Be prepared for the <br /> Mountains and beyond!</h1>
        <p className="mt-6">scroll down <ArrowNarrowDownIcon className="w-6 inline-block"/></p>
      </div>
    </header>
  );
};

export default Hero;
