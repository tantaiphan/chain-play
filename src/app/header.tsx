import { svnPoppins } from "@/core/font/font";

/* eslint-disable @next/next/no-img-element */
export const HomeHeader = () => {
  return (
    <div>
      <header className="bg-white shadow-header">
        <nav
          className="mx-auto flex items-center justify-between py-4 px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="w-[192px] h-[32px]"
                  src="/assets/icon/logo-chainplay.png"
                  alt=""
                />
              </a>
            </div>
            <div
              className={`ml-10 lg:flex lg:gap-x-6 ${svnPoppins.poppins_Medium.className} text-base text-app-base`}
            >
              <a href="#" className="leading-4">
                Explore
              </a>
              <a href="#" className="leading-4">
                Genres
              </a>
              <a href="#" className="leading-4">
                Whitelists
              </a>
              <a href="#" className="leading-4">
                Learn
              </a>
              <a href="#" className="leading-4">
                Community
              </a>
            </div>
            <div className={`ml-8 ${svnPoppins.poppins_Normal.className}`}>
              <div className=" rounded-[100px] relative bg-select-box w-[338px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <img
                    src="/assets/icon/search-icon.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <input
                  type="text"
                  className="block w-full bg-select-box rounded-[100px] border-0 py-1.5 pl-10 pr-10 text-app-base  placeholder:text-color-main text-sm sm:leading-6"
                  placeholder="Search NFTs / Collections / Addresses"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <a
              href="#"
              className={`${svnPoppins.poppins_Medium.className} text-base leading-6 text-app-base`}
            >
              Log in
            </a>
            <button
              type="button"
              className="ml-6 inline-flex w-[81px] justify-center rounded-xl bg-gradient-to-r from-[#D71C5D] from-% to-[#FF9017] px-3 py-2 text-base text-white shadow-sm ml-3 w-auto"
              // onClick={() => {}}
            >
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
