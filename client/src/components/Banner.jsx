import { NavLink } from "react-router-dom";
import {assets} from "../assets/assets"
const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-4 border border-gray-700">
      {/**Hero Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-end pl-2 pr-8 py-10 sm:py-0 bannerleft bg-gray-900">
        <div className="text-white">
          <div className="flex item-center gap-2">
           <NavLink to="/products">
           <button className="font-medium text-sm md:text-base bg-white rounded-full text-black px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-500">
              JOIN NOW
            </button>
           </NavLink>
          </div>
          <h1 className="text-2xl sm:py-3 lg:text-5xl leading-relaxed">
            ALTOCUMULUS TECHNOLOGIES PVT LTD
          </h1>
          {/* <div className="flex items-center gap-2">
            <p className="w-8 md:w-40 h-[2px] bg-white"></p>
            <p className="font-semibold text-sm md:text-base">
              TRAINING & PLACEMENTS
            </p>
          </div> */}
        </div>
      </div>
      {/**Hero Right side */}
      <img className="w-full sm:w-1/2" src={assets.bannerright} alt="banner" />
    </div>
  );
};

export default Banner;