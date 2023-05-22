import { svnPoppins } from "@/core/font/font";

/* eslint-disable @next/next/no-img-element */
export const HomeFooter = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#D71C5D] from-% to-[#FF9017] py-6">
        <div>
          <a href="#" className="">
            <img
              className="w-[192px] h-[32px] mx-auto mb-6"
              src="/assets/icon/logo-chainplay-white.png"
              alt=""
            />
          </a>
          <p
            className={`${svnPoppins.poppins_Normal.className} text-center text-white text-base`}
          >
            FAQ <span className="mx-2">|</span> Newsletter{" "}
            <span className="mx-2">|</span> Advertise{" "}
            <span className="mx-2">|</span> Contact Us{" "}
            <span className="mx-2">|</span> Press Kit{" "}
            <span className="mx-2">|</span> Privacy{" "}
            <span className="mx-2">|</span> Terms
          </p>
          <p
            className={`${svnPoppins.poppins_Normal.className} text-center mt-6 text-base text-white opacity-50`}
          >
            © 2021 PlayToEarn.net - all rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
