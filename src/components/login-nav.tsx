import Link from "next/link";
import { useState } from "react";

const SignInNav = () => {
    const [id, setId] = useState<number>(2);

    return (
        <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
            <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
              <Link className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0" href="../pages/dashboard.html"> Soft UI Dashboard </Link>
              <button navbar-trigger className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                  <span className="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                  <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                  <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                </span>
              </button>
              <div navbar-menu className="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                  <li>
                    <Link className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" aria-current="page" href={`users/dashboard`}>
                      <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href={`users/${id}`}>
                      <i className="mr-1 fa fa-user opacity-60"></i>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href={`signup`}>
                      <i className="mr-1 fas fa-user-circle opacity-60"></i>
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href={`signin`}>
                      <i className="mr-1 fas fa-key opacity-60"></i>
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default SignInNav;